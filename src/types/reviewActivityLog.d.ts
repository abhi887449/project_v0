export interface ReviewActivityLog {
  _id: string;
  reviewId: string;
  action: "create" | "update" | "delete";
  userId: string;
  timestamp: Date;
}