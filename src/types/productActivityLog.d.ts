export interface ProductActivityLog {
  _id: string;
  adminId: string;
  productId: string;
  action: "create" | "update" | "delete" | "restore";
  details?: string;
  timestamp: Date;
}