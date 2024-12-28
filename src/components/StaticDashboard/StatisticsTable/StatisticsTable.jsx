import PropTypes from "prop-types";
import styles from "./StatisticsTable.module.css";

const StatisticsTable = ({ data }) => {
  return (
    <table className={styles.statisticsTable}>
      <thead>
        <tr>
          <th>Category</th>
          <th>Sum</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.category}</td>
            <td>{item.value}</td>
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
