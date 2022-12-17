import {MongoClient} from "mongodb";
import {MONGO_DB} from "../constants/endpoint.js";
import {INCOME} from "../constants/global.js";
import lodash from "lodash";
import {UUID} from "bson";

const {isEmpty, groupBy, get} = lodash;

const getUserIncomes = async (req, res) => {
  const expenseDetails = req.body;
  const client = new MongoClient(MONGO_DB.CONNECTION, {
    useUnifiedTopology: true,
    pkFactory: {createPk: () => new UUID().toBinary()},
  });
  try {
    const expenseCollection = client.db("wealthManager").collection("Expenses");
    const {userId} = expenseDetails;
    const expenseCursor = await expenseCollection
      .find({
        userId,
        type: "income",
      })
      .sort({date: -1});

    const expenses = await expenseCursor.toArray();
    const groupedExpense = groupBy(expenses, "category");
    const responseToSend = {
      assets: get(groupedExpense, INCOME.ASSET, []),
      equity: get(groupedExpense, INCOME.EQUITY, []),
      fixedIncome: get(groupedExpense, INCOME.FIXED_INCOME, []),
      alternatives: get(groupedExpense, INCOME.ALTERNATIVE, []),
    };
    res.status(200).json(responseToSend);
  } finally {
    await client.close();
  }
};

const getCurrentYearsIncome = async (req, res) => {
  const expenseDetails = req.body;
  const client = new MongoClient(MONGO_DB.CONNECTION, {
    useUnifiedTopology: true,
    pkFactory: {createPk: () => new UUID().toBinary()},
  });
  try {
    const expenseCollection = client.db("wealthManager").collection("Expenses");
    const {userId} = expenseDetails;
    const currentYear = new Date().getFullYear();
    const startDate = new Date(`01/01/${currentYear}`);
    const endDate = new Date(`12/31/${currentYear}`);
    const expenseCursor = await expenseCollection
      .find({
        userId,
        date: {$gte: new Date(startDate), $lte: new Date(endDate)},
      })
      .sort({date: -1});

    const expenses = await expenseCursor.toArray();
    const groupedExpense = groupBy(expenses, "type");
    const spends = get(groupedExpense, "spend", []);
    const income = get(groupedExpense, "income", []);
    const totalSpends = spends.reduce(
      (prevVal, spend) => prevVal + spend.value,
      0
    );
    const totalIncome = income.reduce(
      (prevVal, income) => prevVal + income.value,
      0
    );

    const savings = totalIncome - totalSpends;

    const responseToSend = {
      spends,
      income,
      savings,
    };
    res.status(200).json(responseToSend);
  } finally {
    await client.close();
  }
};

const ReportsController = {getUserIncomes, getCurrentYearsIncome};

export default ReportsController;
