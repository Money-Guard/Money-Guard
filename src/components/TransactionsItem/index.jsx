import React from "react";
import styles from "./TransactionItem.module.css";

const TransactionItem = ({ transaction, onEdit, onDelete }) => {
  const { id, date, type, category, comment, sum } = transaction;

  const handleEdit = () => {
    onEdit(id); // Düzenleme işlemini başlatmak için id gönderiliyor
  };

  const handleDelete = () => {
    onDelete(id); // Silme işlemini başlatmak için id gönderiliyor
  };

  return (
    <tr className={styles.transactionItem}>
      <td>{date}</td>
      <td>{type}</td>
      <td>{category}</td>
      <td>{comment}</td>
      <td className={styles.sum}>{sum.toLocaleString()}</td>
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
