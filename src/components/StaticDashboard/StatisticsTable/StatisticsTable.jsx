import PropTypes from "prop-types";
import styles from "./StatisticsTable.module.css";
import { selectTransactions } from "../../../redux/transaction/selectors";
import { useSelector } from "react-redux";

const StatisticsTable = () => {
  const transactions = useSelector(selectTransactions)
  return (
    <table className={styles.statisticsTable}>
      <thead>
        <tr>
          <th>Category</th>
          <th>Sum</th>
        </tr>
      </thead>
      <tbody>
        {transactions?.map((item, index) => (
          <tr key={index}>
            <td>{item.category.id}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

StatisticsTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default StatisticsTable;
