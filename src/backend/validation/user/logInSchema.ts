import { z } from "zod";                         

export const logInValidationSchema = z.object({
  email: z
    .string()
    .trim()
    .nonempty("Email is required")
    .email("Invalid email format")
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "invalid email"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .nonempty("Password is require"),
});
