import { Request, Response } from 'express';
import { Property, PropertyDescription, PropertyLocation, PropertyDetail } from '../models/property.model';
import mongoose from 'mongoose';

// Create a new property
export async function createPropertyHandler(req: Request, res: Response) {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        const { userId, description, price, images, details, location } = req.body;

        // Step 1: Create the main Property document first without references
        const property = new Property({
            userId,
            price,
            images
        });
        await property.save({ session });

        // Step 2: Use the propertyId to create the sub-documents
        const propertyDescription = new PropertyDescription({
            ...description,
            propertyId: property._id
        });
        await propertyDescription.save({ session });

        const propertyLocation = new PropertyLocation({
            ...location,
            propertyId: property._id
        });
        await propertyLocation.save({ session });

        const propertyDetail = new PropertyDetail({
            ...details,
            propertyId: property._id
        });
        await propertyDetail.save({ session });

        // Step 3: Update the main Property document with references to sub-documents
        property.description = propertyDescription._id;
        property.details = propertyDetail._id;
        property.location = propertyLocation._id;

        await property.save({ session });

        await session.commitTransaction();
        session.endSession();

        res.status(201).json(property);
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Unknown error' });
        }
    }
}

// Get all properties
export async function getPropertiesHandler(req: Request, res: Response) {
    try {
        const properties = await Property.find()
            .populate('description')
            .populate('details')
            .populate('location');
        res.status(200).json(properties);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Unknown error' });
        }
    }
}

// Get a single property by ID
export async function getPropertyByIdHandler(req: Request, res: Response) {
    try {
        const property = await Property.findById(req.params.id)
            .populate('description')
            .populate('details')
            .populate('location');
        if (!property) {
            return res.status(404).json({ error: 'Property not found' });
        }
        res.status(200).json(property);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Unknown error' });
        }
    }
}

// Update a property by ID
export async function updatePropertyHandler(req: Request, res: Response) {
    try {
        const { description, details, location, ...updateData } = req.body;

        const property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ error: 'Property not found' });
        }

        if (description) {
            await PropertyDescription.findByIdAndUpdate(property.description, description);
        }
        if (details) {
            await PropertyDetail.findByIdAndUpdate(property.details, details);
        }
        if (location) {
            await PropertyLocation.findByIdAndUpdate(property.location, location);
        }

        Object.assign(property, updateData);
        await property.save();

        res.status(200).json(property);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Unknown error' });
        }
    }
}

// Delete a property by ID
export async function deletePropertyHandler(req: Request, res: Response) {
    try {
        const property = await Property.findByIdAndDelete(req.params.id);
        if (!property) {
            return res.status(404).json({ error: 'Property not found' });
        }

        await PropertyDescription.findByIdAndDelete(property.description);
        await PropertyDetail.findByIdAndDelete(property.details);
        await PropertyLocation.findByIdAndDelete(property.location);

        res.status(200).json({ message: 'Property deleted successfully' });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Unknown error' });
        }
    }
}
