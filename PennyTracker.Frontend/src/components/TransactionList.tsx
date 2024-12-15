import React from 'react';
import { Transaction } from '../models/Transaction';

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  // Check if there are no transactions
  if (transactions.length === 0) {
    return (
      <div className="transaction-list">
        <h3>Transactions</h3>
        <p>No transactions found.</p>
      </div>
    );
  }

  const getTransactionClass = (category: string) => {
    if (category === 'Income') {
      return 'income'; // Class for income transactions
    }
    if (category === 'Expense') {
      return 'expense'; // Class for expense transactions
    }
    return '';
  };

  return (
    <div className="transaction-list">
      <h3>Transactions</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} className={getTransactionClass(transaction.category)}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td 
                style={{
                  color: transaction.amount >= 0 ? 'green' : 'red',
                }}
              >
                ₹{transaction.amount}
              </td>
              <td>{transaction.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
