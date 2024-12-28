import PropTypes from "prop-types";
import styles from "./StatisticsDashboard.module.css";

const StatisticsDashboard = ({
  selectedYear,
  selectedMonth,
  onYearChange,
  onMonthChange,
}) => {
  const years = [2023, 2024];
  const months = ["January", "February"];

  return (
    <div className={styles.statisticsDashboard}>
      <select
        className={styles.select}
        value={selectedYear}
        onChange={(e) => onYearChange(Number(e.target.value))}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <select
        value={selectedMonth}
        onChange={(e) => onMonthChange(e.target.value)}
      >
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
};

StatisticsDashboard.propTypes = {
  selectedYear: PropTypes.number.isRequired,
  selectedMonth: PropTypes.string.isRequired,
  onYearChange: PropTypes.func.isRequired,
  onMonthChange: PropTypes.func.isRequired,
};

export default StatisticsDashboard;
