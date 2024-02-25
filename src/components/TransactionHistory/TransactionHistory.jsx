import TransactionRow from "./TransactionRow/TransactionRow";
import styles from "./TransactionHistory.module.css"; // Import the CSS module

const TransactionHistory = ({ items }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.transactionHistory}>
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
