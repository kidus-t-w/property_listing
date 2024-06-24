import { Response, Request } from "express";
import { getAllUsers } from "../services/users.service";
import { get } from "mongoose";

export async function getUsersHandler(req: Request, res: Response){
    const users = await getAllUsers()
    return res.json(users)
}
