import User from "../models/User.js";

export const addIncome = async (req, res) => {
  const { userId, description, amount } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.income.push({ des: description, amt: amount });
    user.budget += amount;
    await user.save();

    res.json({ success: true, message: "Income added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

export const addExpense = async (req, res) => {
  const { userId, description, amount } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(200).json({ error: "User not found" });
    }

    if (amount > user.budget) {
      return res
        .status(200)
        .json({ success: false, message: "Expense exceeds budget" });
    }

    user.expense.push({ des: description, amt: amount });
    user.budget -= amount;
    await user.save();

    res
      .status(200)
      .json({ success: true, message: "Expense added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

export const getIncomeCount = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const incomeCount = user.income.length;
    res.json({ success: true, incomeCount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

export const getExpenseCount = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const expenseCount = user.expense.length;
    res.json({ success: true, expenseCount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

export const getBudget = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ success: true, budget: user.budget });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

export const getIncome = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ success: true, income: user.income });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

export const getExpense = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ success: true, expense: user.expense });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
