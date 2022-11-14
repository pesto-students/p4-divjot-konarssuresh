import {MongoClient} from "mongodb";
import {MONGO_DB} from "../constants/endpoint.js";
import lodash from "lodash";
import {UUID} from "bson";
const {isEmpty} = lodash;
const signUpUser = async (req, res) => {
  const client = new MongoClient(MONGO_DB.CONNECTION, {
    useUnifiedTopology: true,
    pkFactory: {createPk: () => new UUID().toBinary()},
  });
  try {
    const usersCollection = client.db("wealthManager").collection("users");
    const {userId, ...remainingProps} = req.body;
    await client.connect();
    const userCursor = await usersCollection.find({
      _id: userId,
    });
    const users = await userCursor.toArray();
    if (isEmpty(users)) {
      const userDoc = {
        ...remainingProps,
        _id: userId,
        expenses: [],
        incomes: [],
      };
      await usersCollection.insertOne(userDoc);
      res.status(200).json({message: "User added successfully"});
    } else {
      res.status(400).json({errors: ["UserId already exists"]});
    }
  } finally {
    await client.close();
  }
};

const loginUser = async (req, res) => {
  const client = new MongoClient(MONGO_DB.CONNECTION);
  try {
    const usersCollection = client.db("wealthManager").collection("users");
    const {userId, password} = req.body;
    await client.connect();
    const userCursor = await usersCollection.find({
      _id: userId,
    });
    const users = await userCursor.toArray();
    if (isEmpty(users)) {
      res.status(400).json({message: "User does not exist"});
    } else {
      if (users[0].password !== password) {
        res.status(400).json({message: "Invalid Credentials"});
      } else {
        res.status(200).json({message: "User logged in successfully"});
      }
    }
  } finally {
    await client.close();
  }
};

const UserController = {signUpUser, loginUser};

export default UserController;
