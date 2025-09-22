import mongoose, { Schema, Document, Types } from "mongoose";
import { User } from "@/types/user";
import { UserAddress } from "@/types/userAddress";

export interface UserDocument extends Omit<User, "_id">, Document {
  _id: Types.ObjectId;
}
export interface UserAddressDocument
  extends Omit<UserAddress, "_id">,
    Document {
  _id: Types.ObjectId;
}

const AddressSchema = new Schema<UserAddress>(
  {
    streetAddress: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
    isDefault: { type: Boolean, default: false },
  },
  { _id: true }
);

const UserModel = new Schema<UserDocument>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    passwordHash: { type: String, required: true },
    phoneNumber: { type: String },
    profileImageUrl: { type: String },
    addressList: { type: [AddressSchema], default: [] },
    role: { type: String, enum: ["customer", "admin"], default: "customer" },
    isActive: { type: Boolean, default: true },
  },
  {
    _id: true,
    timestamps: true, // auto adds createdAt & updatedAt
  }
);

export const UserSchema = UserModel
