export interface NotificationLog {
  _id: string;
  userId: string;
  notificationId: string;
  action: "sent" | "read" | "deleted";
  timestamp: Date;
}