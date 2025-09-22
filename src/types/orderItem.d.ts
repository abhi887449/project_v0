
export interface OrderItem {
  productId: string; // reference -> Product._id
  quantity: number;
  unitPrice: number;
}