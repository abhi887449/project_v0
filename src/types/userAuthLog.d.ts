export interface UserAuthLog {
  _id: string;
  userId?: string;
  action: "login" | "logout" | "register" | "password_reset";
  ipAddress: string;
  userAgent: string;
  timestamp: Date;
}