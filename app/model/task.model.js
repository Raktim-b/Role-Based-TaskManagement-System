const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    assignedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },

    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },

    progress: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["pending", "in-progress", "completed"],
      default: "pending",
    },

    file: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const TaskModel = mongoose.model("Task", taskSchema);
module.exports = TaskModel;
