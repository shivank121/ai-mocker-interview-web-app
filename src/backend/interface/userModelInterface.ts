import Document from "mongoose";

export interface UserModelInterface extends Document {
  _id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyExpiry: Date;
  isVerified: boolean;
}
