import {z} from "zod";

export const checkUniqueUserNameValidationSchema = z.object({
  username: z
  .string()
  .nonempty("username must be required")
  .min(2, "Username must be at least 3 characters long")
  .max(20, "Username cannot exceed 20 characters")
  .regex(
    /^[a-zA-Z0-9_][a-zA-Z0-9_]*[a-zA-Z0-9]$/,
    "Username must start with a letter, number, or underscore and end with a letter or number"
  ),
});