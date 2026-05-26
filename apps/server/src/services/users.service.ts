import _ from "lodash";
import logger from "../utils/logger";
import PropertyModel, { PropertyDocument } from "../models/property.model";
import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import UserModel, { UserDocument, UserInput } from "../models/user.model";

export async function getUser(query: FilterQuery<UserDocument>) {
  return UserModel.findOne(query).lean();
}

export async function getUsers(query: FilterQuery<UserDocument>) {
  return UserModel.find(query).lean();
}

export async function createUser(input: UserInput) {
  try {
    const user = await UserModel.create(input);
    return _.omit(user.toJSON(), "password");
  } catch (e: any) {
    logger.error(e);
    return new Error(e);
  }
}

export async function deleteUser(query: FilterQuery<UserDocument>) {
  return UserModel.deleteOne(query);
}

export async function findAndUpdateUser(
  query: FilterQuery<UserDocument>,
  update: UpdateQuery<UserDocument>,
  options: QueryOptions
) {
  return UserModel.findOneAndUpdate(query, update, options);
}

export async function validatePassword({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const user = await UserModel.findOne({ email });
  if (!user) return false;

  const isValid = await user.comparePassword(password);

  if (!isValid) return false;
  return _.omit(user.toJSON(), "password");
}

export async function getUserProperties(
  userId: string,
  options: QueryOptions = { lean: true }
) {
  return await PropertyModel.find({ userId }, {}, options);
}
