import React from "react";
import styles from "./TransactionItem.module.css";
import { openModal } from "../../redux/modal/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../redux/transaction/selectors";
import { deleteTransaction } from "../../redux/transaction/operations";

const TransactionItem = ({ transaction }) => {
  const { id, transactionDate, type, categoryId, comment, amount } = transaction;
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const myCategory = categories.find(category => category.id === categoryId);
  
  const handleEdit = () => {
    dispatch(openModal({mode:"edit", id}))
  }

  const handleDelete = () => {
    dispatch(deleteTransaction(id));
  };

  return (
    <tr className={styles.transactionItem}>
      <td>{new Date(transactionDate).toLocaleDateString()}</td>
      <td className={`${styles.type} ${type === "EXPENSE" ? styles.typeExpense : styles.typeIncome}`}>
        {type === "EXPENSE" ? "-" : "+"}
      </td>
      <td>{myCategory?.name}</td>
      <td>{comment}</td>
      <td className={`${styles.sum} ${type === "EXPENSE" ? styles.sumNegative : styles.sumPositive}`}>
        {amount.toFixed(2)}
      </td>
      <td className={styles.actions}>
        <button className={styles.editBtn} onClick={handleEdit}>
          ✏️
        </button>
        <button className={styles.deleteBtn} onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TransactionItem;

