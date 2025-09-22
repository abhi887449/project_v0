export interface Wishlist {
  _id: string;
  userId: string; // reference -> User._id
  productIds: string[];
  createdAt: Date;
}