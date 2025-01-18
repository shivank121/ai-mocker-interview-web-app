import { z } from "zod";

export const verifyValidationSchema = z.object({
  verifyCode: z
    .string()
    .length(6, { message: "Verification code must be a 6-digit number" }) // Length must be 6
    .regex(/^\d{6}$/, { message: "Verification code must be a 6-digit number" }) // Must contain only numbers (0-9)
});
