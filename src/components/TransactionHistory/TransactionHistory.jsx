import React from "react";
import TransactionRow from "./TransactionRow";
import "./transaction-history.css";

const TransactionHistory = ({ items }) => {
  return (
    <div className="wrapper">
      <div className="transaction-history">
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody>
            {items.map((transaction) => (
              <TransactionRow
                key={transaction.id}
                type={transaction.type}
                amount={transaction.amount}
                currency={transaction.currency}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
