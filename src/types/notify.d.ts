export interface Notification {
  _id: string;
  userId: string;
  title: string;
  message: string;
  type: "order" | "promotion" | "system";
  isRead: boolean;
  createdAt: Date;
}