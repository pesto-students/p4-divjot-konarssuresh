import express from "express";
import {body, validationResult} from "express-validator";
import User from "../controller/userController.js";

const userRouter = express.Router();

userRouter.post(
  "/signUp",
  body("firstName", "firstName is required").exists(),
  body("lastName", "lastName is required").exists(),
  body("userId", "userId must be valid email id").isEmail(),
  body("password", "password is required").exists(),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array().map(({msg}) => msg)});
    }
    try {
      await User.signUpUser(req, res, next);
    } catch (e) {
      next();
    }
  }
);

userRouter.post(
  "/login",
  body("userId", "userId must be valid email id").isEmail(),
  body("password", "password is required").exists(),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array().map(({msg}) => msg)});
    }
    try {
      await User.loginUser(req, res, next);
    } catch (e) {
      next();
    }
  }
);

export {userRouter};
