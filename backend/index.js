import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import signup from "./routes/signup.js";
import login from "./routes/login.js";
import transactions from "./routes/transactions.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", signup);
app.use("/api/users", login);

app.use("/api/transactions", transactions);

app.use(function (err, req, res, next) {
  res.json({ msg: "Sorry, Server not Responding" });
});

app.listen(8080,() =>console.log("Server started on port http://localhost:8080"));

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log(error.message);
  });
