import React from 'react';

const TransactionList = ({ title, transactions }) => {
  return (
    <div className="bg-gray-600 p-6 rounded-lg shadow-md">
      <h2 className="text-lg text-white font-semibold mb-4">{title}</h2>
      {transactions.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {transactions.map((transaction, index) => (
            <li key={index} className="flex justify-between py-2">
              <span className="text-white">{transaction.des}</span>
              <span className="text-white">{transaction.amt}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No {title.toLowerCase()}.</p>
      )}
    </div>
  );
};

export default TransactionList;
