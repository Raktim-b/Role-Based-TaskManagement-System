const express = require("express");
const authRoutes = require("./auth.routes");
const taskRoutes = require("./task.routes");
const userRouter = require("./user.routes");
const router = express.Router();

router.use("/auth", authRoutes);
router.use("/task", taskRoutes);
router.use("/user", userRouter);

module.exports = router;
