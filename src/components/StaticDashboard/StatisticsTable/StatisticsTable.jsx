import styles from "./StatisticsTable.module.css";
import { selectTransactionsByDate } from "../../../redux/transaction/selectors";
import { useSelector } from "react-redux";


const StatisticsTable = () => {

  const transactions = useSelector(selectTransactionsByDate)

  return (

    <table className={styles.statisticsTable}>
      <thead>
        <tr>
          <th>Category</th>
          <th>Sum</th>
        </tr>
      </thead>
      <tbody>
        {transactions?.categoriesSummary?.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.total}</td>
          </tr>
        ))}
      </tbody>
    </table>

  );
};

export default StatisticsTable;
