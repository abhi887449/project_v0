export interface Cart {
  _id: string;
  userId: string; // reference -> User._id
  items: CartItem[];
  updatedAt: Date;
}