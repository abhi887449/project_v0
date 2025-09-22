import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDBEcommerce } from "@/lib/mongodb";
import { UserSchema } from "@/schema/userSchema";

export async function POST(req: Request) {
  try {
    const {
      fullName,
      email,
      password,
      phoneNumber,
      profileImageUrl,
      addressList,
    } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password required" },
        { status: 400 }
      );
    }

    const connection = await connectDBEcommerce();
    const User = connection.models.User || connection.model("User", UserSchema);

    const existing = await User.findOne({ email });

    if (existing) {
      return NextResponse.json(
        {
          status: "error",
          message: "User already exists !",
        },
        { status: 400 }
      );
    }

    const saltRounds = parseInt(process.env.SALT_ROUNDS as string);
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = await User.create({
      fullName: fullName,
      email: email,
      passwordHash: hashedPassword,
      phoneNumber: phoneNumber,
      profileImageUrl: profileImageUrl,
      addressList: addressList,
    });

    return NextResponse.json(
      {
        status: "success",
        message: "User registered successfully !",
        userId: newUser._id,
        email: newUser.email
      },
      { status: 201 }
    );
  } catch (error) {
    console.log("Signup error:", error);
    return NextResponse.json(
      {
        status: "error",
        message: "Something went wrong. Please try again later !",
      },
      { status: 500 }
    );
  }
}
