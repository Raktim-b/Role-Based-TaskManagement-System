const UserModel = require("../model/userModel");
const httpStatusCode = require("../utils/httpStatusCode");
const bcrypt = require("bcrypt");
const cloudinary = require("../config/cloudinary");

class UserController {
  //  CREATE USER

  async createUser(req, res) {
    try {
      const { name, email, password, role, phone } = req.body;
      if (!name || !email || !password || !role) {
        return res.status(httpStatusCode.BAD_REQUEST).json({
          success: false,
          message: "All fields are required",
        });
      }
      const existingUser = await UserModel.findOne({
        email,
      });
      if (existingUser) {
        return res.status(httpStatusCode.BAD_REQUEST).json({
          success: false,
          message: "User already exists",
        });
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const userData = new UserModel({
        name,
        email,
        password: hashedPassword,
        role,
        phone,
      });
      if (req.file) {
        userData.avatar = req.file.path;
        userData.public_id = req.file.filename;
      }
      const result = await userData.save();
      return res.status(httpStatusCode.CREATED).json({
        success: true,
        message: "Registered Successfully",
        data: result,
      });
    } catch (error) {
      return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message,
      });
    }
  }

  //  GET USER

  async getUser(req, res) {
    try {
      const users = await UserModel.find({
        isDeleted: false,
      });
      return res.status(httpStatusCode.OK).json({
        success: true,
        message: "Users fetched successfully",
        data: users,
      });
    } catch (error) {
      return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message,
      });
    }
  }

  //  UPDATE USER

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const existUser = await UserModel.findById(id);
      if (!existUser) {
        return res.status(httpStatusCode.NOT_FOUND).json({
          success: false,
          message: "User not found",
        });
      }
      let updateObj = {
        ...req.body,
      };
      if (req.body && req.body.password) {
        const salt = await bcrypt.genSalt(10);
        updateObj.password = await bcrypt.hash(req.body.password, salt);
      }
      if (req.file) {
        if (existUser.public_id) {
          await cloudinary.uploader.destroy(existUser.public_id);
        }
        updateObj.avatar = req.file.path;
        updateObj.public_id = req.file.filename;
      }
      const updatedUser = await UserModel.findByIdAndUpdate(id, updateObj, {
        new: true,
      });
      return res.status(httpStatusCode.OK).json({
        success: true,
        message: "User updated successfully",
        data: updatedUser,
      });
    } catch (error) {
      return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message,
      });
    }
  }

  //  SOFT DELETE

  async softDelete(req, res) {
    try {
      const { id } = req.params;
      const existUser = await UserModel.findById(id);
      if (!existUser) {
        return res.status(httpStatusCode.NOT_FOUND).json({
          success: false,
          message: "User not found",
        });
      }
      if (existUser.public_id) {
        await cloudinary.uploader.destroy(existUser.public_id);
      }
      const deletedUser = await UserModel.findByIdAndUpdate(
        id,
        {
          isDeleted: true,
        },
        {
          new: true,
        },
      );
      return res.status(httpStatusCode.OK).json({
        success: true,
        message: "User deleted successfully",
        data: deletedUser,
      });
    } catch (error) {
      return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message,
      });
    }
  }

  //  TOGGLE STATUS

  async toggleUserStatus(req, res) {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const updatedStatusUser = await UserModel.findByIdAndUpdate(
        id,
        {
          status,
        },
        {
          new: true,
        },
      );
      if (!updatedStatusUser) {
        return res.status(httpStatusCode.NOT_FOUND).json({
          success: false,
          message: "User not found",
        });
      }
      return res.status(httpStatusCode.OK).json({
        success: true,
        message: "User status changed",
        data: updatedStatusUser,
      });
    } catch (error) {
      return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message,
      });
    }
  }
}

module.exports = new UserController();
