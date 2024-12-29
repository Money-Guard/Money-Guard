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
      <button className={styles.addButton} onClick={handleAdd}>
        +
      </button>
    </div>
  );
};

export default TransactionList;

