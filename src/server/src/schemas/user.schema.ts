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

export type CreateUserInput = z.infer<typeof createUserSchema>;
