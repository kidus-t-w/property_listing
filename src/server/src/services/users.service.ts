import UserModel, { UserInput } from "../models/user.model";

export async function getAllUsers() {
  const users = await UserModel.find({});
  return users;
}

export async function createUser(values: UserInput) {
  // I want to create a user
  try {
    const user = await UserModel.create(values);
    return user;
  } catch (err: any) {
    return new Error("Email duplicate not allowed.");
  }
}

export async function deleteUser(value: UserInput) {
  const user = UserModel.deleteOne(value)
  return user
}
