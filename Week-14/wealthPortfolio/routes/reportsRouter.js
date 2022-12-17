import express from "express";
import Reports from "../controller/reportsController.js";
import {body, validationResult} from "express-validator";

const reportsRouter = express();

reportsRouter.post(
  "/getIncomes",
  body("userId", "user id is required").isEmail(),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array().map(({msg}) => msg)});
    }
    try {
      await Reports.getUserIncomes(req, res);
    } catch (e) {
      next();
    }
  }
);

reportsRouter.post(
  "/getYearsIncome",
  body("userId", "user id is required").isEmail(),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array().map(({msg}) => msg)});
    }
    try {
      await Reports.getCurrentYearsIncome(req, res);
    } catch (e) {
      next();
    }
  }
);

export {reportsRouter};
