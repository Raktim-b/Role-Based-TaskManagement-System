const Task = require("../model/task.model");
const cloudinary = require("../config/cloudinary");
const httpStatusCode = require("../utils/httpStatusCode");

class TaskController {
  //  CREATE TASK

  async createTask(req, res) {
    try {
      const { title, description } = req.body;
      const task = new Task({
        title,
        description,
        assignedBy: req.user.id,
      });
      const result = await task.save();
      if (result) {
        res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Task created successfully",
          data: result,
        });
      }
    } catch (error) {
      return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message,
      });
    }
  }

  //  ASSIGN EMPLOYEE

  async assignEmployee(req, res) {
    try {
      const { taskId, employeeId } = req.body;

      const task = await Task.findByIdAndUpdate(
        taskId,
        {
          assignedTo: employeeId,
        },
        {
          new: true,
        },
      );

      res.status(httpStatusCode.OK).json({
        success: true,
        message: "Employee assigned",
        data: task,
      });
    } catch (error) {
      return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message,
      });
    }
  }

  //  EMPLOYEE TASKS

  async myTasks(req, res) {
    try {
      const tasks = await Task.find({
        assignedTo: req.user.id,
      });

      res.status(httpStatusCode.OK).json({
        success: true,
        data: tasks,
      });
    } catch (error) {
      return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message,
      });
    }
  }

  //  UPDATE PROGRESS

  async updateProgress(req, res) {
    try {
      const { taskId, progress } = req.body;
      const task = await Task.findById(taskId);
      if (!task) {
        return res.status(httpStatusCode.NOT_FOUND).json({
          success: false,
          message: "Task not found",
        });
      }
      if (task.assignedTo != req.user.id) {
        return res.status(httpStatusCode.FORBIDDEN).json({
          success: false,
          message: "You can only update your own tasks",
        });
      }

      // UPDATE TASK
      const updatedTask = await Task.findByIdAndUpdate(
        taskId,
        {
          progress,
          status: "in-progress",
        },
        {
          new: true,
        },
      );

      return res.status(httpStatusCode.OK).json({
        success: true,
        message: "Progress updated",
        data: updatedTask,
      });
    } catch (error) {
      return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message,
      });
    }
  }

  //  UPLOAD FILE

  async uploadFile(req, res) {
    try {
      const { taskId } = req.body;
      const existTask = await Task.findById(taskId);
      if (!existTask) {
        return res.status(httpStatusCode.NOT_FOUND).json({
          success: false,
          message: "Task not found",
        });
      }
      if (existTask.assignedTo != req.user.id) {
        return res.status(httpStatusCode.FORBIDDEN).json({
          success: false,
          message: "You can upload file only on your assigned tasks",
        });
      }
      let updateObj = {};
      if (req.file) {
        if (existTask.public_id) {
          await cloudinary.uploader.destroy(existTask.public_id);
        }
        updateObj.file = req.file.path;
        updateObj.public_id = req.file.filename;
      }
      const task = await Task.findByIdAndUpdate(taskId, updateObj, {
        new: true,
      });
      return res.status(httpStatusCode.OK).json({
        success: true,
        message: "File uploaded successfully",
        data: task,
      });
    } catch (error) {
      return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message,
      });
    }
  }

  //  MARK COMPLETED

  async markCompleted(req, res) {
    try {
      const { taskId } = req.params;
      const existTask = await Task.findById(taskId);
      if (!existTask) {
        return res.status(httpStatusCode.NOT_FOUND).json({
          success: false,
          message: "Task not found",
        });
      }
      if (existTask.assignedTo != req.user.id) {
        return res.status(httpStatusCode.FORBIDDEN).json({
          success: false,
          message: "You can upload file only on your assigned tasks",
        });
      }
      const task = await Task.findByIdAndUpdate(
        taskId,
        {
          status: "completed",
          progress: 100,
        },
        {
          new: true,
        },
      );
      res.status(httpStatusCode.OK).json({
        success: true,
        message: "Task completed",
        data: task,
      });
    } catch (error) {
      return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message,
      });
    }
  }

  //  TRACK PROGRESS

  async trackProgress(req, res) {
    try {
      const tasks = await Task.find()
        .populate("assignedBy")
        .populate("assignedTo");

      res.status(httpStatusCode.OK).json({
        success: true,
        data: tasks,
      });
    } catch (error) {
      return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message,
      });
    }
  }
}

module.exports = new TaskController();
