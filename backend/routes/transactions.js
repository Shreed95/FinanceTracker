import express from "express";
import { addIncome,addExpense,getExpenseCount,getIncomeCount,getBudget,getIncome,getExpense } from "../controllers/transactions.js";

const router = express.Router();

router.post("/addincome", addIncome);
router.post("/addexpense", addExpense);
router.get("/incomecount/:userId", getIncomeCount);
router.get("/expensecount/:userId",getExpenseCount);
router.get("/getbudget/:userId", getBudget);
router.get("/getincome/:userId",getIncome);
router.get("/getexpense/:userId",getExpense);

export default router;
