import { z } from 'zod'

const payload = {
  body: z.object({
    firstName: z.string({ message: 'first name must be a string.' }).optional(),
    lastName: z.string({ message: 'last name must be a string.' }).optional(),
    email: z
      .string({ required_error: 'email is required.' })
      .email({ message: 'must be a valid email.' }),
    password: z
      .string({ required_error: 'password is required.' })
      .min(6, { message: 'must be at least 6 characters.' }),
    phoneNumber: z
      .string({ message: 'phone number must be a string.' })
      .optional(),
  })
}

const params = {
  params: z.object({
    id: z.string({ required_error: 'user id is required' })
  })
}

export const createUserSchema = z.object({
  ...payload
})

export const updateUserSchema = z.object({
  body: z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    phoneNumber: z.string().optional()
  }),
  ...params
});

export const deleteUserSchema = z.object({
  ...params
})

export const getUserSchema = z.object({
  ...params
})

export type ReadUserInput = z.infer<typeof getUserSchema>
export type CreateUserInput = z.infer<typeof createUserSchema>
export type UpdateUserInput = z.infer<typeof updateUserSchema>
export type DeleteUserInput = z.infer<typeof deleteUserSchema>
