export interface PaymentTransactionLog {
  _id: string;
  paymentId: string;
  orderId: string;
  statusChangedTo: Payment["paymentStatus"];
  timestamp: Date;
}