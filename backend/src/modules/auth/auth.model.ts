import mongoose from "mongoose";
import { IUser } from "./auth.interface";

const userSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    number: {
      type: String,
      required: true,
      unique: true,
      match: [/^01\d{9}$/, "Invalid mobile number"],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    nid: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    role: {
      type: String,
      enum: ["USER", "AGENT","ADMIN"],
      default: "USER",
    },
    status: {
      type: String,
      enum: ["active", "blocked"],
      default: "active",
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
    initialBalance: {
      type: Number,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
