const express = require("express");
const authController = require("../controller/auth.controller");
const router = express.Router();

// Admin Register
router.post("/admin-register", authController.adminReg);
router.post("/login", authController.logIn);

module.exports = router;
