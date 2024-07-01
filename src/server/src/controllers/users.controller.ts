import { Response, Request } from "express";
import { getAllUsers, createUser, deleteUser, updateUser } from "../services/users.service";

import { CreateUserInput, UpdateUserInput } from "../schemas/user.schema";

export async function getUsersHandler(req: Request, res: Response) {
  const users = await getAllUsers();
  return res.json(users);
}

export async function getSingleUserHandler(req: Request, res: Response) {
  const id = req.params.value;
  console.log(id);
  return res.send("This is a single user");
}

export async function getAuthenticatedUserHandler(req: Request, res: Response) {
  return res.send("This is the authenticated user");
}

// if it is not a default export then it is called a named export --> NOTE
export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  const { email, password, firstName, lastName, phoneNumber } = req.body;

  // Create the user

  const user = await createUser({
    email,
    password,
    firstName: firstName ? firstName : null,
    lastName: lastName ? lastName : null,
    phoneNumber: phoneNumber ? phoneNumber : null,
  });

  if (user instanceof Error) {
    return res.status(400).json({
      error: "Email address is already in use.",
    });
  }

  // Return the newly created user with status code of 200
  return res.send(user);
}

export async function updateUserHandler(
  req: Request<{ id: string }, {}, UpdateUserInput["body"]>,
  res: Response
) {
  const userId = req.params.id;
  const update = req.body;

  const updatedUser = await updateUser(userId, update);

  if (updatedUser instanceof Error) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.json(updatedUser);
}


export async function deleteUserHandler(req: Request, res: Response) {
  const userId = req.params.id;

  const user = await deleteUser(userId);

  if (user instanceof Error) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.send("User deleted successfully.");
}
