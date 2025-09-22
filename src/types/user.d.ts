export interface User {
  _id: string;
  fullName: string;
  email: string;
  passwordHash: string; // hashed password, never plain
  phoneNumber?: string;
  profileImageUrl?: string;
  addressList: UserAddress[];
  role: "customer" | "admin"; // for access control
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}