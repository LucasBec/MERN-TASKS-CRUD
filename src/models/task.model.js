import mongoose from "mongoose";
import { States } from "../enums/states.js";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: Object.values(States),
      default: States.PENDING,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    startDate: {
      type: Date,
      default: new Date(),
    },
    finishDate: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

Object.assign(taskSchema.statics, { States });

export default mongoose.model("Task", taskSchema);
