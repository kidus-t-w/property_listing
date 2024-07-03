import { Request, Response } from 'express'
import {
  CreatePropertyInput,
  DeletePropertyInput,
  ReadPropertyInput,
  UpdatePropertyInput
} from '../schemas/property.schema'
import {
  createProperty,
  deleteProperty,
  findAndUpdateProperty,
  findManyProperty,
  findProperty
} from '../services/property.service'

export async function createPropertyHandler(req: Request<{}, {}, CreatePropertyInput['body']>, res: Response) {
  const userId = res.locals.user._id
  const body = req.body

  const property = await createProperty({ ...body, userId })
  return res.status(200).json(property)
}

export async function updatePropertyHandler(req: Request<UpdatePropertyInput['params'], {}, UpdatePropertyInput['body']>, res: Response) {
  const userId = res.locals.user._id
  const propertyId = req.params.id
  const update = req.body

  const property = await findProperty({ _id: propertyId })
  if (!property) {
    return res.sendStatus(404)
  }

  if (String(property.userId) !== userId) {
    return res.sendStatus(403)
  }

  const updateProperty = await findAndUpdateProperty({ _id: propertyId }, update, { new: true })
  return res.status(200).json(updateProperty)
}

export async function getPropertyHandler(req: Request<ReadPropertyInput['params'], {}, {}>, res: Response) {
  const propertyId = req.params.id

  const property = await findProperty({ _id: propertyId })
  if (!property) {
    return res.sendStatus(404)
  }

  return res.status(200).json(property)
}

export async function getPropertiesHandler(req: Request, res: Response) {
  // TODO: Here is where i set query params
  return await findManyProperty({})
}

export async function deletePropertyHandler(req: Request<DeletePropertyInput['params']>, res: Response) {
  const userId = res.locals.user._id
  const propertyId = req.params.id

  const property = await findProperty({ _id: propertyId })
  if (!property) {
    return res.sendStatus(404)
  }

  if (String(property.userId) !== userId) {
    return res.sendStatus(403)
  }

  await deleteProperty({ _id: propertyId })
  return res.sendStatus(200)
}
