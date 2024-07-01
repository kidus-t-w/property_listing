import {
  IProperty,
  Property,
  PropertyDescription,
  PropertyDetail,
  PropertyLocation,
} from "../models/property.model";
import mongoose from "mongoose";
export async function getAllProperties() {
  try {
    const properties = await Property.find()
      .populate("description")
      .populate("details")
      .populate("location");
    return properties;
  } catch (error) {
    return error;
  }
}

export async function createProperty(data: Partial<IProperty>) {
  try {
    const { userId, description, price, images, details, location } = data;

    // Step 1: Create the main Property document first without references
    const property = new Property({
      userId,
      price,
      images,
    });
    await property.save();

    // Step 2: Use the propertyId to create the sub-documents
    const propertyDescription = new PropertyDescription({
      ...description,
      propertyId: property._id,
    });
    await propertyDescription.save();

    const propertyLocation = new PropertyLocation({
      ...location,
      propertyId: property._id,
    });
    await propertyLocation.save();

    const propertyDetail = new PropertyDetail({
      ...details,
      propertyId: property._id,
    });
    await propertyDetail.save();

    // Step 3: Update the main Property document with references to sub-documents
    property.description = propertyDescription._id;
    property.details = propertyDetail._id;
    property.location = propertyLocation._id;

    await property.save();

    return property;
  } catch (error) {
    throw error;
  }
}

export async function updateProperty(
  propertyId: string,
  updateData: Partial<IProperty>
) {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { description, details, location, ...otherData } = updateData;

    const property = await Property.findById(propertyId).session(session);
    if (!property) {
      throw new Error("Property not found");
    }

    if (description) {
      await PropertyDescription.findByIdAndUpdate(
        property.description,
        description,
        { session }
      );
    }
    if (details) {
      await PropertyDetail.findByIdAndUpdate(property.details, details, {
        session,
      });
    }
    if (location) {
      await PropertyLocation.findByIdAndUpdate(property.location, location, {
        session,
      });
    }

    Object.assign(property, otherData);
    await property.save({ session });

    await session.commitTransaction();
    session.endSession();

    return property;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
}

export async function deleteProperty(propertyId: string) {
  try {
    const property = await Property.findByIdAndDelete(propertyId);
    if (!property) {
      throw new Error("Property not found");
    }

    await PropertyDescription.findByIdAndDelete(property.description);
    await PropertyDetail.findByIdAndDelete(property.details);
    await PropertyLocation.findByIdAndDelete(property.location);

    return { message: "Property deleted successfully" };
  } catch (error) {
    throw error;
  }
}

export async function getPropertyById(propertyId: string) {
    try {
        const property = await Property.findById(propertyId)
            .populate('description')
            .populate('details')
            .populate('location');
        if (!property) {
            throw new Error('Property not found');
        }

        // Convert Decimal128 to number or string
        const propertyData = property.toObject();
        propertyData.price = propertyData.price.toString();

        return propertyData;
    } catch (error) {
        throw error;
    }
}
