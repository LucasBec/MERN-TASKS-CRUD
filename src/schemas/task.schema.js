import { z } from "zod";
import { States } from "../enums/states.js";

export const createTaskSchema = z.object({
  title: z
    .string({
      required_error: "title is required",
    })
    .min(3)
    .max(50),

  description: z
    .string({
      required_error: "description is required",
    })
    .min()
    .max(255),
  state: z.enum(Object.values(States)),

  date: z.string()
    .datetime()
    .optional(),
});
