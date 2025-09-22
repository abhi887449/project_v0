export interface Review {
  _id: string;
  productId: string; // reference -> Product._id
  userId: string;    // reference -> User._id
  rating: number;    // 1–5
  comment?: string;
  createdAt: Date;
  updatedAt: Date;
}