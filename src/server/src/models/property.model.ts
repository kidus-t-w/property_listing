import mongoose from "mongoose";

export interface PropertyInput {
  userId: mongoose.Types.ObjectId
  title: string
  description: string
  status: string
  type: string
  address: string
  country: string
  city: string
  subCity: string
  furnished?: boolean
  bathrooms?: number
  garages?: number
  areaSize: number
  bedrooms?: number
  floor?: number
  price: number
  image: string[]
  yearBuilt?: number
}

export interface PropertyDocument extends mongoose.Document, PropertyInput {
  createdAt: Date
  updatedAt: Date
}

const propertySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
  type: { type: String, required: true },
  address: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  subCity: { type: String, required: true },
  furnished: { type: Boolean, allowNull: true },
  bathrooms: { type: Number, allowNull: true },
  garages: { type: Number, allowNull: true },
  areaSize: { type: Number, required: true },
  bedrooms: { type: Number, allowNull: true },
  floors: { type: Number, allowNull: true },
  price: { type: Number, required: true },
  image: { type: [String], required: true },
  yearBuilt: {type: Number, allowNull: true}
}, { timestamps: true });

const PropertyModel = mongoose.model<PropertyDocument>('Property', propertySchema)
export default PropertyModel;