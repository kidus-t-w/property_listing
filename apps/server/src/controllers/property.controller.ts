import { Request, Response } from "express";
import {
  CreatePropertyInput,
  DeletePropertyInput,
  GetManyPropertyInput,
  ReadPropertyInput,
  UpdatePropertyInput,
} from "../schemas/property.schema";
import {
  createProperty,
  deleteProperty,
  findAndUpdateProperty,
  findManyProperty,
  findProperty,
} from "../services/property.service";
import { property } from "lodash";
import { FilterQuery } from "mongoose";
import { PropertyDocument } from "../models/property.model";

export async function createPropertyHandler(
  req: Request<{}, {}, CreatePropertyInput["body"]>,
  res: Response
) {
  const userId = res.locals.user._id;
  const body = req.body;

  const property = await createProperty({ ...body, userId });
  return res.status(200).json(property);
}

export async function updatePropertyHandler(
  req: Request<UpdatePropertyInput["params"], {}, UpdatePropertyInput["body"]>,
  res: Response
) {
  const userId = res.locals.user._id;
  const propertyId = req.params.id;
  const update = req.body;

  const property = await findProperty({ _id: propertyId });
  if (!property) {
    return res.sendStatus(404);
  }

  if (String(property.userId) !== userId) {
    return res.sendStatus(403);
  }

  const updateProperty = await findAndUpdateProperty(
    { _id: propertyId },
    update,
    { new: true }
  );
  return res.status(200).json(updateProperty);
}

export async function getPropertyHandler(
  req: Request<ReadPropertyInput["params"], {}, {}>,
  res: Response
) {
  const propertyId = req.params.id;

  const property = await findProperty({ _id: propertyId });
  if (!property) {
    return res.sendStatus(404);
  }

  return res.status(200).json(property);
}

export async function getPropertiesHandler(
  req: Request<{}, {}, {}, GetManyPropertyInput["query"]>,
  res: Response
) {
  const { limit, page, recent, type } = req.query;

  const query: FilterQuery<PropertyDocument> = {};

  // get the recent properties
  if (recent) {
    query.createdAt = {
      $gte: new Date(new Date().setDate(new Date().getDate() - 30)),
    };
  }

  // get properties by type
  if (type) {
    query.type = type;
  }

  // get the properties based on the query params
  const properties = await findManyProperty(query, {
    limit: limit || 10,
    skip: (page || 1 - 1) * (limit || 10),
  });

  return res.status(200).json(properties);
}

export async function deletePropertyHandler(
  req: Request<DeletePropertyInput["params"]>,
  res: Response
) {
  const userId = res.locals.user._id;
  const propertyId = req.params.id;

  const property = await findProperty({ _id: propertyId });
  if (!property) {
    return res.sendStatus(404);
  }

  if (String(property.userId) !== userId) {
    return res.sendStatus(403);
  }

  await deleteProperty({ _id: propertyId });
  return res.sendStatus(200);
}
