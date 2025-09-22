export interface CouponUsageLog {
  _id: string;
  couponId: string;
  userId: string;
  orderId: string;
  timestamp: Date;
}