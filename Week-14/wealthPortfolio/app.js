import express from "express";
import {userRouter} from "./routes/userRouter.js";
import {expenseRouter} from "./routes/expenseRouter.js";
import {reportsRouter} from "./routes/reportsRouter.js";
import morgan from "morgan";
import fs from "fs";
import path, {dirname} from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let app = express();

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  {
    flags: "a",
  }
);
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan("combined", {stream: accessLogStream}));
app.use("/user", userRouter);
app.use("/expense", expenseRouter);
app.use("/reports", reportsRouter);
app.use((err, res) => {
  if (err) {
    console.log(err);
    res.status(500).json({message: "Internal Server Error Occured"});
  }
});

app.listen(3000, () => {
  console.log("app listening on port 3000");
});
