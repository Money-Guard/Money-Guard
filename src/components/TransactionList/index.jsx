import { useSelector, useDispatch } from "react-redux";
import { selectTransactions } from "../../redux/transaction/selectors";
import { openModal } from "../../redux/modal/slice";
import styles from "./TransactionList.module.css";
import TransactionItem from "../TransactionsItem";

const TransactionList = () => {
  const transactions = useSelector(selectTransactions);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(openModal({mode:"add"}))
  }

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableWrapper}>
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
      
      {/* Mobile View Cards */}
      <div className={styles.mobileCards}>
        {transactions.map((transaction) => (
          <div key={transaction.id} className={styles.mobileCard}>
            <div className={styles.cardRow}>
              <span className={styles.cardLabel}>Date</span>
              <span>{new Date(transaction.transactionDate).toLocaleDateString()}</span>
            </div>
            <div className={styles.cardRow}>
              <span className={styles.cardLabel}>Type</span>
              <span>{transaction.type}</span>
            </div>
            <div className={styles.cardRow}>
              <span className={styles.cardLabel}>Category</span>
              <span>{transaction.category}</span>
            </div>
            <div className={styles.cardRow}>
              <span className={styles.cardLabel}>Comment</span>
              <span>{transaction.comment}</span>
            </div>
            <div className={styles.cardRow}>
              <span className={styles.cardLabel}>Sum</span>
              <span className={styles.sum}>{transaction.amount}</span>
            </div>
            <div className={styles.cardActions}>
              <button className={styles.editBtn} onClick={() => dispatch(openModal({mode:"edit", id: transaction.id}))}>
                ✏️
              </button>
              <button className={styles.deleteBtn}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <button className={styles.addButton} onClick={handleAdd}>
        +
      </button>
    </div>
  );
};

export default TransactionList;

