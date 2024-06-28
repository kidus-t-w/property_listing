import mongoose from "mongoose";
import { nullable } from "zod";

const PropertyDescriptionSchema = new mongoose.Schema({
  propertyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Property",
    required: true,
  },
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
  type: { type: String, required: true },
});

const PropertyLocationSchema = new mongoose.Schema({
  propertyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Property",
    required: true,
  },
  address: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  subCity: { type: String, required: true },
});

const PropertyDetailSchema = new mongoose.Schema({
  propertyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Property",
    required: true,
  },
  furnished: { type: String, required: true },
  bathrooms: { type: String, required: true },
  areaSize: { type: String, required: true },
  landArea: { type: String, required: true },
  garages: { type: String, required: true },
  yearBuilt: { type: String, required: true },
  bedrooms: { type: String, required: true },
  floor: { type: String, required: true },
  sizePostfix: { type: String, required: true },
  landAreaSizePostfix: { type: String, required: true },
});

const PropertySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  description: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PropertyDescription",
    required: false,
  },
  price: { type: mongoose.Schema.Types.Decimal128, required: true },
  images: [{ type: String, required: true }],
  details: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PropertyDetail",
    required: false,
  },
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PropertyLocation",
    required: false,
  },
});

export const PropertyDescription = mongoose.model(
  "PropertyDescription",
  PropertyDescriptionSchema
);
export const PropertyLocation = mongoose.model(
  "PropertyLocation",
  PropertyLocationSchema
);
export const PropertyDetail = mongoose.model(
  "PropertyDetail",
  PropertyDetailSchema
);
export const Property = mongoose.model("Property", PropertySchema);
