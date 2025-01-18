import { z } from "zod";

export const registerValidationSchema = z.object({
  username: z
    .string()
    .nonempty("username must be required")
    .min(2, "Username must be at least 3 characters long")
    .max(20, "Username cannot exceed 20 characters")
    .regex(
      /^[a-zA-Z0-9_][a-zA-Z0-9_]*[a-zA-Z0-9]$/,
      "Username must start with a letter, number, or underscore and end with a letter or number"
    ),

  firstName: z
    .string()
    .nonempty("First name require")
    .max(30, "First name cannot exceed 30 characters")
    .regex(
      /^[A-Za-z]+$/,
      "First name can only contain alphanumeric characters and underscores"
    ),

  lastName: z
    .string()
    .nonempty("Last name require")
    .max(30, "Last name cannot exceed 30 characters")
    .regex(
      /^[A-Za-z]+$/,
      "Last name can only contain alphanumeric characters and underscores"
    ),

  email: z
    .string()
    .trim()
    .nonempty("Email is required")
    .email("Invalid email format")
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .nonempty("Password is require"),
}); 
