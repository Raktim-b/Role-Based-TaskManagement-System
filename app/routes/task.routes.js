const express = require("express");
const authCheck = require("../middleware/auth");
const allowRoles = require("../middleware/allowRoles");
const taskController = require("../controller/task.controller");
const UserImage = require("../middleware/fileUploades");
const router = express.Router();

// Create Task
router.post(
  "/create-task",
  authCheck,
  allowRoles("manager"),
  taskController.createTask,
);

// Assign Task
router.put(
  "/assign-task",
  authCheck,
  allowRoles("manager"),
  taskController.assignEmployee,
);

// My Task
router.get(
  "/my-task",
  authCheck,
  allowRoles("employee"),
  taskController.myTasks,
);

// Task Progress
router.put(
  "/update-progress",
  authCheck,
  allowRoles("employee"),
  taskController.updateProgress,
);

// File Uploade
router.put(
  "/file-upload",
  authCheck,
  UserImage.single("file"),
  allowRoles("employee"),
  taskController.uploadFile,
);

// Mark Completed
router.put(
  "/complete-progress/:taskId",
  authCheck,
  allowRoles("employee"),
  taskController.markCompleted,
);

// Track Progress
router.get(
  "/track-progress",
  authCheck,
  allowRoles("manager"),
  taskController.trackProgress,
);

module.exports = router;
