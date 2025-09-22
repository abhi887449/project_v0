export interface AdminActivityLog {
  _id: string;
  adminId: string;
  action: string;
  module: "users" | "products" | "orders" | "settings";
  details?: string;
  timestamp: Date;
}