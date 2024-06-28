import { z } from "zod";

export const createUserSchema = z.object({
  body: z.object({
    firstName: z.string({ message: "First Name must be a string." }).optional(),
    lastName: z.string({ message: "Last Name must be a string." }).optional(),
    email: z
      .string({ required_error: "Email is required." })
      .email({ message: "Must be a valid email." }),
    password: z
      .string({ required_error: "Password is required." })
      .min(6, { message: "Must be atleast 6 characters." }),
    phoneNumber: z
      .string({ message: "Phone Number must be a string." })
      .optional(),
  }),
});

export const updateUserSchema = z.object({
  body: z.object({
    firstName: z.string({ message: "First Name must be a string." }).optional(),
    lastName: z.string({ message: "Last Name must be a string." }).optional(),
    email: z
      .string({ message: "Must be a valid email." })
      .email({ message: "Must be a valid email." })
      .optional(),
    password: z
      .string({ message: "Must be at least 6 characters." })
      .min(6, { message: "Must be at least 6 characters." })
      .optional(),
    phoneNumber: z
      .string({ message: "Phone Number must be a string." })
      .optional(),
  }),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
