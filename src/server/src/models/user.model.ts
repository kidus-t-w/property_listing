import config from 'config' 
import mongoose from "mongoose";
import bcrypt from 'bcrypt'

export interface UserInput { 
  userName?: string | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
  password: string;
  email: string;
  phoneNumber?: string | undefined;
}

export interface UserDocument extends UserInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string) : Promise<boolean>
}

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, require: false, nullable: true },
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

userSchema.pre('save', async function (next) {
  let user = this as UserDocument
  
  if (!user.isModified('password')) 
    return next()
  
  const salt = await bcrypt.genSalt(config.get<number>('saltWorkFactor'))
  user.password = await bcrypt.hash(user.password, salt)
  return next()
})

userSchema.methods.comparePassword = async function (candidatePassword: string) {
  const user = this as UserDocument
  return bcrypt.compare(candidatePassword, user.password).catch(e => false)
}

const UserModel = mongoose.model<UserDocument>("Users", userSchema);
export default UserModel;
