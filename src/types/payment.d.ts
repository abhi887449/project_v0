export interface Payment {
  _id: string;
  orderId: string; // reference -> Order._id
  userId: string;  // reference -> User._id
  paymentMethod: "card" | "upi" | "wallet" | "cod";
  transactionId?: string;
  paymentStatus: "pending" | "completed" | "failed" | "refunded";
  amountPaid: number;
  paidAt?: Date;
  createdAt: Date;
}