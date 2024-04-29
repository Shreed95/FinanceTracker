import React, { useState } from "react";

const FinanceForm = ({ setCount }) => {
    const userId = JSON.parse(localStorage.getItem("user")).user;
    const [formData, setFormData] = useState({
        type: "income",
        description: "",
        amount: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let url;
            if (formData.type === "income") {
                url = "https://finance-tracker-server-rho.vercel.app/api/transactions/addincome";
            }
            else {
                url = "https://finance-tracker-server-rho.vercel.app/api/transactions/addexpense";
            }

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: userId,
                    description: formData.description,
                    amount: formData.amount
                }),
            });
            const data = await response.json();
            if (data.success) {
                alert(data.message);
            } else {
                alert(data.message);
            }
            setCount(true);
        } catch (error) {
            console.error(error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className="pt-8">
            <div className="bg-gray-600 p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-4 text-white">Add Income or Expense</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="type" className="block font-medium text-white">Type:</label>
                        <select id="type" name="type" value={formData.type} onChange={handleChange} className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2 pl-3">
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="description" className="block font-medium text-white">Description:</label>
                        <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} required className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2 pl-3" />
                    </div>
                    <div>
                        <label htmlFor="amount" className="block font-medium text-white">Amount:</label>
                        <input type="number" id="amount" name="amount" value={formData.amount} onChange={handleChange} required className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2 pl-3" />
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add Transaction</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FinanceForm;
