export interface Coupon {
  _id: string;
  couponCode: string;
  discountPercentage: number;
  maxDiscountAmount?: number;
  minOrderValue?: number;
  validFrom: Date;
  validUntil: Date;
  usageLimit: number;
  usedCount: number;
  createdAt: Date;
}