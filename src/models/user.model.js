import mongoose from "mongoose";
import { Roles } from "../enums/roles.js";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    rol: {
      type: String,
      required: true,
      enum: Object.values(Roles),
      default: Roles.USER, // Default role is USER. You can change this to ADMINISTRADOR if needed.
    },
  },
  {
    timestamps: true,
  }
);

// Add Roles as static properties to the User model
Object.assign(userSchema.statics, { Roles });

export default mongoose.model("User", userSchema);
