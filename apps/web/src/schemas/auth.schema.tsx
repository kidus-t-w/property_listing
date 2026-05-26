import { z } from "zod";

export const loginSchema = z.object({
  email: z.string({ required_error: "Email is required." }).email(),
  password: z.string({ required_error: "Password is required." }),
});

export const signUpFormSchema = z
  .object({
    firstName: z.string({ required_error: "First name is required" }),
    lastName: z.string({ required_error: "Last name is required" }),
    email: z
      .string({
        required_error: "Email is required",
      })
      .email({
        message: "Email must be a valid email address.",
      }),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(8, {
        message: "Password must be a minimum of 8 characters",
      })
      .max(25, {
        message: "Password must be a maximum of 25 characters",
      }),
    confirm_password: z.string(),
  })
  .refine(({ password, confirm_password }) => password === confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

export type SignUpInput = z.infer<typeof signUpFormSchema>
export type LoginInput = z.infer<typeof loginSchema>;
