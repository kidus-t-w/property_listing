import { Request, Response } from "express";
import {
  Property,
  PropertyDescription,
  PropertyLocation,
  PropertyDetail,
} from "../models/property.model";
import mongoose from "mongoose";
import {
  createProperty,
  deleteProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
} from "../services/property.service";

// Create a new property
export async function createPropertyHandler(req: Request, res: Response) {
  try {
    const propertyData = req.body;
    const newProperty = await createProperty(propertyData);
    res.status(201).json(newProperty);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error" });
    }
  }
}
// Get all properties
export async function getPropertiesHandler(req: Request, res: Response) {
  try {
    const properties = await getAllProperties();
    res.status(200).json(properties);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error" });
    }
  }
}

// Get a single property by ID
export async function getPropertyByIdHandler(req: Request, res: Response) {
  try {
    const propertyId = req.params.id;
    const property = await getPropertyById(propertyId);
    res.status(200).json(property);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error" });
    }
  }
}

// Update a property by ID
export async function updatePropertyHandler(req: Request, res: Response) {
  try {
    const propertyId = req.params.id;
    const updateData = req.body;

    const updatedProperty = await updateProperty(propertyId, updateData);
    res.status(200).json(updatedProperty);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error" });
    }
  }
}

// Delete a property by ID
export async function deletePropertyHandler(req: Request, res: Response) {
  try {
    const propertyId = req.params.id;
    const result = await deleteProperty(propertyId);
    res.status(200).json(result);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error" });
    }
  }
}
