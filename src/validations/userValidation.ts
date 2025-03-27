import { z } from "zod";

export const userSchema = z.object({
    username: z
        .string()
        .email({ message: "Username must be a valid email" }),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long" })
        .max(16, { message: "Password must be at most 16 characters long" })
        .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
        .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
        .regex(/\d/, { message: "Password must contain at least one number" })
        .regex(/[!@#$%^&*(),.?":{}|<>ñÑ¡¿]/, { message: "Password must contain at least one special character" })
});
