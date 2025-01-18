import mongoose, { Schema } from "mongoose";
import AutoIncrementFactory from "mongoose-sequence";

import { UserModelInterface } from "../interface/userModelInterface";

// @ts-ignore
const AutoIncrement = AutoIncrementFactory(mongoose);

const UserSchema: Schema<UserModelInterface> = new Schema(
  {
    _id: {
      type: Number,
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      minlength: [3, "Username must be at least 3 characters long"],
      maxlength: [20, "Username cannot exceed 20 characters"],
      match: [
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain alphanumeric characters and underscores",
      ],
    },
    firstName: {
      type: String,
      required: [true, "First name is required"],
      maxlength: [30, "First name must be at most 30 characters long"],
      match: [/^[A-Za-z]+$/, "Invalid name"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      maxlength: [30, "Last name must be at most 30 characters long"],
      match: [/^[A-Za-z]+$/, "Invalid name"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please provide a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters long"],
    },
    verifyCode: {
      type: String,
      required: true,
    },
    verifyExpiry: {
      type: Date,
      required: true,
      default: () => Date.now() + 3600000,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Apply the auto-increment plugin to _id

// @ts-ignore
UserSchema.plugin(AutoIncrement, { id: "user_seq", inc_field: "_id" });

const UserModel =
  (mongoose.models.User as mongoose.Model<UserModelInterface>) ||
  mongoose.model("User", UserSchema);

export default UserModel;
