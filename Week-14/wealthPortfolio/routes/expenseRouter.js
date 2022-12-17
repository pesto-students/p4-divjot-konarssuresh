import express from "express";
import {body, validationResult} from "express-validator";
import Expense from "../controller/expenseController.js";

import {UUID} from "bson";

const expenseRouter = express.Router();

expenseRouter.post(
  "/addExpense",
  body("type", "type should be either spend or income")
    .isIn(["spend", "income"])
    .exists(),
  body(
    "category",
    'category must be one of "Household", "Social Life", "Others"'
  )
    .if(body("type").equals("spend"))
    .isIn(["Household", "Social Life", "Others"]),
  body(
    "category",
    'category must be one of "Asset", "Equity", "Fixed Income","Alternative"'
  )
    .if(body("type").equals("income"))
    .isIn(["Asset", "Equity", "Fixed Income", "Alternative"]),
  body("value", "value must be number and non 0").isNumeric(),
  body("name", "name must be string").isString(),
  body("notes", "notes must be string").isString().optional(),
  body("date", "incorrect date")
    .custom((v) => !isNaN(Date.parse(v)))
    .optional(),
  body("userId", "user id is required").isEmail(),
  async (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array().map(({msg}) => msg)});
    }
    try {
      await Expense.addExpense(req, res);
    } catch (e) {
      next();
    }
  }
);

expenseRouter.put(
  "/editExpense",
  body("type", "type should be either spend or income")
    .isIn(["spend", "income"])
    .exists()
    .optional(),
  body(
    "category",
    'category must be one of "Household", "Social Life", "Others"'
  )
    .if(body("type").equals("spend"))
    .isIn(["Household", "Social Life", "Others"])
    .optional(),
  body(
    "category",
    'category must be one of "Asset", "Equity", "Fixed Income","Alternative"'
  )
    .if(body("type").equals("income"))
    .isIn(["Asset", "Equity", "Fixed Income", "Alternative"])
    .optional(),
  body("value", "value must be number and non 0").isNumeric().optional(),
  body("name", "name must be string").isString().optional(),
  body("notes", "notes must be string").isString().optional().optional(),
  body("date", "incorrect date")
    .custom((v) => !isNaN(Date.parse(v)))
    .optional(),
  body("userId", "user id is required").isEmail(),
  body("expenseId", "expenseId id is invalid").custom((v) => UUID.isValid(v)),
  async (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array().map(({msg}) => msg)});
    }
    try {
      await Expense.editExpense(req, res);
    } catch (e) {
      next();
    }
  }
);

expenseRouter.delete(
  "/deleteExpense",
  body("userId", "user id is required").isEmail(),
  body("expenseId", "expenseId id is invalid").custom((v) => UUID.isValid(v)),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array().map(({msg}) => msg)});
    }
    try {
      await Expense.deleteExpense(req, res);
    } catch (e) {
      next();
    }
  }
);

export {expenseRouter};
