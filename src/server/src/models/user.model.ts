import mongoose from "mongoose";
import { nullable } from "zod";

export interface UserInput {
  firstName: string | null;
  lastName: string | null;
  password: string;
  email: string;
  phoneNumber: string | null;
}

export interface UserDocumnet extends UserInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, require: false, nullable: true },
    lastName: { type: String, require: false, nullable: true },
    email: { type: String, require: true, unique: true },
    phoneNumber: { type: String, require: false, nullable: true },
    password: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model<UserDocumnet>("Users", userSchema);
export default UserModel;
