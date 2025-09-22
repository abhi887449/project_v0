export interface Admin {
  _id: string;
  fullName: string;
  email: string;
  passwordHash: string;
  role: "superadmin" | "manager" | "support";
  permissions: string[]; // e.g. ["manage_users", "manage_orders"]
  createdAt: Date;
  updatedAt: Date;
}