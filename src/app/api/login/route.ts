import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDBEcommerce } from "@/lib/mongodb";
import { UserSchema } from "@/schema/userSchema";

const SECRET = process.env.JWT_SECRET as string;

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        {
          status: "error",
          message: "Email and password required!",
        },
        { status: 400 }
      );
    }

    const connection = await connectDBEcommerce();
    const User = connection.models.User || connection.model("User", UserSchema);


    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        {
          status: "error",
          message: "Invalid credentials!",
        },
        { status: 401 }
      );
    }

    const validPassword = await bcrypt.compare(password, user.passwordHash);
    if (!validPassword) {
      return NextResponse.json(
        {
          status: "error",
          message: "Invalid credentials!",
        },
        { status: 401 }
      );
    }

    const token = jwt.sign({ id: user._id, email: user.email }, SECRET, {
      expiresIn: "1h",
    });

    // store token in HttpOnly cookie (more secure than localStorage)
    const response = NextResponse.json({
      status: "success",
      message: "Login successful!",
    });
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600,
      path: "/",
    });

    return response;
  } catch (error) {
    console.log("Login error:", error); 
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
