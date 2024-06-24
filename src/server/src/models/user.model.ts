import mongoose from "mongoose";

export interface UserInput {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    phoneNumber: string;
}

export interface UserDocumnet extends UserInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new mongoose.Schema({
    firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    email: {type: String, require: true, unique: true},
    phoneNumber: {type: String, require: true},
    password: {type: String, require: true},
},
{
    timestamps: true
}
)

const UserModel = mongoose.model<UserDocumnet>("Users", userSchema)
export default UserModel;