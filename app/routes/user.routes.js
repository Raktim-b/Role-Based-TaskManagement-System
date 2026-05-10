const express = require("express");
const authCheck = require("../middleware/auth");
const allowRoles = require("../middleware/allowRoles");
const userController = require("../controller/user.Controller");
const UserImage = require("../middleware/fileUploades");
const router = express.Router();

// Create User
router.post(
  "/create-user",
  authCheck,
  allowRoles("admin"),
  UserImage.single("avatar"),
  userController.createUser,
);

// Get User
router.get("/get-user", authCheck, allowRoles("admin"), userController.getUser);

// Update User
router.put(
  "/update-user/:id",
  authCheck,
  allowRoles("admin"),
  userController.updateUser,
);

//Soft Delete User
router.delete(
  "/delete-user/:id",
  authCheck,
  allowRoles("admin"),
  userController.softDelete,
);

// Activate / Deactivate User
router.patch(
  "/status-user/:id",
  authCheck,
  allowRoles("admin"),
  userController.toggleUserStatus,
);

module.exports = router;
