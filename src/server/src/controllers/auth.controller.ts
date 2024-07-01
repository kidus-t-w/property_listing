import { NextFunction, Request, Response } from "express";
import UserModel from "../models/user.model";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error";

export async function signup(req: Request, res: Response, next: NextFunction) {
  const { firstName, lastName, email, password} = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new UserModel({ firstName, lastName, email, hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (error: any) {
    next(errorHandler(500, error.message))
  }
  res.json(newUser);
}
