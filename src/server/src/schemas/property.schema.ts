import { z } from 'zod'

const payload = {
  body: z.object({
    title: z.string({ required_error: 'Property title is required.' }),
    description: z.string({ required_error: 'Property description is required.' }),
    status: z.string({ required_error: 'Property status is required.' }),
    type: z.string({ required_error: 'Property type is required.' }),
    address: z.string({ required_error: 'Property address is required.' }),
    country: z.string({ required_error: 'Property country is required.' }),
    city: z.string({ required_error: 'Property city is required.' }),
    subCity: z.string({ required_error: 'Property subCity is required.' }),
    areaSize: z.number({ required_error: 'Property areaSize is required.' }),
    price: z.number({ required_error: 'Property price is required.' }),
    image: z.array(z.string({ required_error: 'Image should be a string.' })).min(3, { message: 'At least 3 images are required.' }),
    userId: z.string({ required_error: 'User ID is required.' }),
    furnished: z.boolean({ message: 'Fu' }).optional(),
    bathrooms: z.number().optional(),
    bedrooms: z.number().optional(),
    garages: z.number().optional(),
    floor: z.number().optional()
  })
}

const params = {
  params: z.object({
    id: z.string({ required_error: 'Property Id is required.' })
  })
}

export const createPropertySchema = z.object({
  ...payload
})

export const updatePropertySchema = z.object({
  ...payload,
  ...params
})

export const getPropertySchema = z.object({
  ...params
})

export const deletePropertySchema = z.object({
  ...params
})

export type ReadPropertyInput = z.infer<typeof getPropertySchema>
export type CreatePropertyInput = z.infer<typeof createPropertySchema>
export type UpdatePropertyInput = z.infer<typeof updatePropertySchema>
export type DeletePropertyInput = z.infer<typeof deletePropertySchema>