import { z } from "zod"; //validacion de datos

const registerSchema = z.object({
  username: z
    .string({
      required_error: "Username is required",
    })
    .min(2)
    .max(25),

  email: z
    .string({
      required_error: "Email is required",
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
      message: "Invalid email format",
    })
    .email(),

  password: z
    .string({
      required_error: "Password is required",
      min_error: "Password must be at least 4 characters long",
      max_error: "Password must not exceed 128 characters",
    })
    .min(4)
    .max(128),
});

const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
      message: "Invalid email format",
    })
    .email(),

  password: z
    .string({
      required_error: "Password is required",
      min_error: "Password must be at least 4 characters long",
      max_error: "Password must not exceed 128 characters",
    })
    .min(4)
    .max(128),
});

export { registerSchema, loginSchema };
