import React, { useEffect, useState } from 'react';

const Budget = ({ count }) => {
    const userId = JSON.parse(localStorage.getItem("user")).user;
    const [budget, setBudget] = useState(0);
    const [incomeCount, setIncomeCount] = useState(0);
    const [expenseCount, setExpenseCount] = useState(0);

    useEffect(() => {
        const fetchBudget = async () => {
            try {
                const response = await fetch(`https://finance-tracker-server-rho.vercel.app/api/transactions/getbudget/${userId}`);
                const data = await response.json();
                setBudget(data.budget);
            } catch (error) {
                console.error('Error fetching budget:', error);
            }
        };

        const fetchIncomeCount = async () => {
            try {
                const response = await fetch(`https://finance-tracker-server-rho.vercel.app/api/transactions/incomecount/${userId}`);
                const data = await response.json();
                setIncomeCount(data.incomeCount);
            } catch (error) {
                console.error('Error fetching income count:', error);
            }
        };

        const fetchExpenseCount = async () => {
            try {
                const response = await fetch(`https://finance-tracker-server-rho.vercel.app/api/transactions/expensecount/${userId}`);
                const data = await response.json();
                setExpenseCount(data.expenseCount);
            } catch (error) {
                console.error('Error fetching expense count:', error);
            }
        };

        fetchBudget();
        fetchIncomeCount();
        fetchExpenseCount();
    }, [count]);

    return (
        <div className="bg-gray-600 p-6 rounded-lg shadow-md mt-6">
            <h2 className="text-lg font-semibold mb-4 text-white">Budget Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-200 p-4 rounded-md">
                    <p className="font-semibold text-lg">Total Income</p>
                    <p className="text-xl">{incomeCount}</p>
                </div>
                <div className="bg-red-200 p-4 rounded-md">
                    <p className="font-semibold text-lg">Total Expenses</p>
                    <p className="text-xl">{expenseCount}</p>
                </div>
                <div className="bg-green-200 p-4 rounded-md">
                    <p className="font-semibold text-lg">Remaining Budget</p>
                    <p className="text-xl">{budget}</p>
                </div>
            </div>
        </div>
    );
};

export default Budget;
