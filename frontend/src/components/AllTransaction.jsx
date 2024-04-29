import React, { useState, useEffect } from 'react';
import TransactionList from './TransactionList';

const AllTransaction = ({count}) => {
  const userId = JSON.parse(localStorage.getItem("user")).user;
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);

  useEffect(() => {
    const fetchIncome = async () => {
      try {
        const response = await fetch(`https://finance-tracker-server-rho.vercel.app/api/transactions/getincome/${userId}`);
        const data = await response.json();
        setIncome(data.income);
      } catch (error) {
        console.error('Error fetching income:', error);
      }
    };

    const fetchExpense = async () => {
      try {
        const response = await fetch(`https://finance-tracker-server-rho.vercel.app/api/transactions/getexpense/${userId}`);
        const data = await response.json();
        setExpense(data.expense);
      } catch (error) {
        console.error('Error fetching expense:', error);
      }
    };

    fetchIncome();
    fetchExpense();
  }, [count]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 pb-10">
      <TransactionList title="Income" transactions={income} />
      <TransactionList title="Expense" transactions={expense} />
    </div>
  );
};

export default AllTransaction;
