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

export async function deleteUser(userId: string) {
  try {
    const user = await UserModel.findByIdAndDelete(userId);
    if (!user) {
      return new Error("User not found");
    }
    return user;
  } catch (err: any) {
    return new Error("Error deleting user");
  }
}

export async function updateUser(userId: string, update: Partial<UserInput>) {
  try {
    const user = await UserModel.findByIdAndUpdate(userId, update, { new: true });
    if (!user) {
      return new Error("User not found");
    }
    return user;
  } catch (err: any) {
    return new Error("Error updating user");
  }
}