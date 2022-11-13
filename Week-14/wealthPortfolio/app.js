import express from "express";
import {userRouter} from "./routes/userRouter.js";

let app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/user", userRouter);

app.use((err, res) => {
  console.log("middleware reached");
  if (err) {
    console.log("internal server error occured");
    res.status(500).json({message: "Internal Server Error Occured"});
  }
});

app.listen(3000, () => {
  console.log("app listening on port 3000");
});
