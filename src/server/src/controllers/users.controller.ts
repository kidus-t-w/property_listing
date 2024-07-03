import _ from 'lodash'
import { Request, Response } from 'express'
import { createUser, deleteUser, findAndUpdateUser, getUser, getUsers } from '../services/users.service'
import { CreateUserInput, DeleteUserInput, ReadUserInput, UpdateUserInput } from '../schemas/user.schema'

export async function getUsersHandler(req: Request, res: Response) {
  const users = await getUsers({})
  return res.status(200).json(_.map(users, user => _.omit(user, ['password', '__v'])))
}

export async function getUserHandler(req: Request<ReadUserInput['params'], {}, {}>, res: Response) {
  const { id } = req.params
  const user = await getUser({ _id: id })

  if (!user)
    return res.status(404).json({ error: 'User not found.' })
  return res.status(200).json(_.omit(user, ['password', '__v']))
}

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  try {
    const user = await createUser(req.body)
    if (user instanceof Error) throw user
    return res.status(201).json(user)
  } catch (error: any) {
    return res.status(409).send(error.message)
  }
}

export async function updateUserHandler(
  req: Request<UpdateUserInput['params'], {}, UpdateUserInput['body']>,
  res: Response
) {
  const { id } = req.params
  const update = req.body
  const user = await getUser({ _id: id })

  if (!user)
    return res.status(404).json({ error: 'User not found.' })

  const updatedUser = await findAndUpdateUser({ _id: id }, update, { new: true })
  if (!updatedUser)
    return res.status(500).json({ error: 'Unable to update user.' })
  return res.status(200).json(_.omit(updatedUser.toJSON(), ['createdAt', 'updatedAt', '__v', 'password']))
}


export async function deleteUserHandler(req: Request<DeleteUserInput['params'], {}, {}>, res: Response) {
  const { id } = req.params
  const user = await getUser({ _id: id })

  if (!user)
    return res.status(404).json({ error: 'User not found.' })

  await deleteUser({ _id: id })
  return res.sendStatus(200)
}
