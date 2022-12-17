import {MongoClient} from "mongodb";
import {MONGO_DB} from "../constants/endpoint.js";
import {INCOME} from "../constants/global.js";
import lodash from "lodash";
import {UUID} from "bson";

const {isEmpty, groupBy, get} = lodash;

const addExpense = async (req, res) => {
  const expenseDetails = req.body;
  const client = new MongoClient(MONGO_DB.CONNECTION, {
    useUnifiedTopology: true,
    pkFactory: {createPk: () => new UUID().toBinary()},
  });

  try {
    const usersCollection = client.db("wealthManager").collection("users");
    const expenseCollection = client.db("wealthManager").collection("Expenses");
    const userCursor = await usersCollection.find({
      _id: expenseDetails.userId,
    });
    const users = await userCursor.toArray();
    if (!isEmpty(users)) {
      const date = expenseDetails?.date
        ? new Date(expenseDetails.date)
        : new Date();
      const expenseDocument = {...expenseDetails, date};
      await expenseCollection.insertOne(expenseDocument);
      res.status(200).json({message: "expense added successfully"});
    } else {
      res.status(400).json({errors: ["userid does not exist"]});
    }
  } finally {
    await client.close();
  }
};

const editExpense = async (req, res) => {
  const expenseDetails = req.body;
  const client = new MongoClient(MONGO_DB.CONNECTION, {
    useUnifiedTopology: true,
    pkFactory: {createPk: () => new UUID().toBinary()},
  });
  try {
    const expenseCollection = client.db("wealthManager").collection("Expenses");
    const {
      userId,
      expenseId = "",
      date = "",
      ...remainingProps
    } = expenseDetails;

    const dateToUpdate = date ? new Date(date) : new Date();
    const status = await expenseCollection.findOneAndUpdate(
      {
        _id: new UUID(expenseId),
        userId: userId,
      },
      {
        $set: {...remainingProps, ...(date ? {date: dateToUpdate} : {})},
      }
    );
    if (status?.lastErrorObject?.updatedExisting) {
      res.status(200).json({message: "expense updated successfully"});
    } else {
      res.status(400).json({message: "user id or expense id does not exist"});
    }
  } finally {
    await client.close();
  }
};

const deleteExpense = async (req, res) => {
  const expenseDetails = req.body;
  const client = new MongoClient(MONGO_DB.CONNECTION, {
    useUnifiedTopology: true,
    pkFactory: {createPk: () => new UUID().toBinary()},
  });
  try {
    const expenseCollection = client.db("wealthManager").collection("Expenses");
    const {expenseId, userId} = expenseDetails;
    const status = await expenseCollection.deleteOne({
      _id: new UUID(expenseId),
      userId,
    });
    console.log(status);
    if (status.deletedCount === 1) {
      res.status(200).json({message: "expense deleted successfully"});
    } else {
      res.status(400).json({message: "userId or expenseId is invalid"});
    }
  } finally {
    await client.close();
  }
};

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

const ExpenseController = {
  addExpense,
  editExpense,
  deleteExpense,
  getUserIncomes,
};

export default ExpenseController;
