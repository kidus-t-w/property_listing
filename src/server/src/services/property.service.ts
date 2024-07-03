import { FilterQuery, UpdateQuery, QueryOptions } from 'mongoose'
import PropertyModel, { PropertyDocument, PropertyInput } from '../models/property.model'
import { query } from 'express'

export const createProperty = async (input: PropertyInput) => {
  return await PropertyModel.create(input)
}

export const findProperty = async (query: FilterQuery<PropertyDocument>, options: QueryOptions = { lean: true }) => {
  return PropertyModel.findOne({ query }, {}, options)
}

export const findManyProperty = async (query: FilterQuery<PropertyDocument>, options: QueryOptions = { lean: true }) => {
  return PropertyModel.find(query, {}, options)
}

export const findAndUpdateProperty = async (query: FilterQuery<PropertyDocument>, update: UpdateQuery<PropertyDocument>, options: QueryOptions) => {
  return PropertyModel.findOneAndUpdate(query, update, options)
}

export const deleteProperty = async (query: FilterQuery<PropertyDocument>) => {
  return PropertyModel.deleteOne(query)
}
