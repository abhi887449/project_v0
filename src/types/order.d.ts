
export interface Order {
  _id: string;
  userId: string; // reference -> User._id
  orderItems: OrderItem[];
  totalAmount: number;
  discountApplied?: number;
  couponCode?: string;
  status: "pending" | "confirmed" | "shipped" | "delivered" | "cancelled" | "returned";
  shippingAddress: UserAddress;
  paymentId?: string; // reference -> Payment._id
  createdAt: Date;
  updatedAt: Date;
}