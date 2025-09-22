export interface OrderStatusLog {
  _id: string;
  orderId: string;
  statusChangedTo: Order["status"];
  changedBy: string; // admin or system
  timestamp: Date;
}