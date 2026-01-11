import mongoose, { Schema, models, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      select: false, // security best practice
    },
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);

export default User;
