import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTransactions } from "../../redux/transaction/selectors";
import { deleteTransaction } from "../../redux/transaction/operations"; // Silme işlemi için operasyon
import styles from "./TransactionList.module.css";
import TransactionItem from "../TransactionItem";

const TransactionList = () => {
  const transactions = useSelector(selectTransactions);
  const dispatch = useDispatch();

  const handleEditTransaction = (id) => {
    console.log("Editing transaction with id:", id);
    // Düzenleme işlemini burada başlatabilir
  };

  const handleDeleteTransaction = (id) => {
    dispatch(deleteTransaction(id)); // Redux üzerinden silme işlemini çağır
  };

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
              onEdit={handleEditTransaction}
              onDelete={handleDeleteTransaction}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
