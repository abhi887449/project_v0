export interface InventoryLog {
  _id: string;
  productId: string;
  changeType: "increase" | "decrease";
  quantityChanged: number;
  newStockLevel: number;
  reason?: string;
  adminId?: string;
  timestamp: Date;
}