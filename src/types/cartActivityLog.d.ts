
export interface CartActivityLog {
  _id: string;
  cartId: string;
  userId: string;
  action: "add_item" | "remove_item" | "update_quantity" | "clear_cart";
  productId?: string;
  quantity?: number;
  timestamp: Date;
}