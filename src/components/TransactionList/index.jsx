import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTransactions } from "../../redux/transaction/selectors";
import { deleteTransaction } from "../../redux/transaction/operations";
import styles from "./TransactionList.module.css";
import TransactionItem from "../TransactionsItem";


const TransactionList = () => {
  const transactions = useSelector(selectTransactions);

  return (
    <div className={styles.tableContainer}>
      <table className={styles.transactionTable}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Comment</th>
            <th>Sum</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
