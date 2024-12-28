import { useState } from "react";
import StatisticsDashboard from "../StatisticsDashboard/StatisticsDashboard";
import StatisticsTable from "../StatisticsTable/StatisticsTable";
import Chart from "../Chart/Chart";
import styles from "./StatisticsTab.module.css";

const fakeData = {
  2023: {
    January: [
      { category: "Gıda", value: 200 },
      { category: "Ulaşım", value: 150 },
      { category: "Eğlence", value: 100 },
    ],
    February: [
      { category: "Gıda", value: 180 },
      { category: "Ulaşım", value: 120 },
      { category: "Eğlence", value: 90 },
    ],
  },
  2024: {
    January: [
      { category: "Gıda", value: 220 },
      { category: "Ulaşım", value: 160 },
      { category: "Eğlence", value: 110 },
    ],
    February: [
      { category: "Gıda", value: 190 },
      { category: "Ulaşım", value: 130 },
      { category: "Eğlence", value: 95 },
    ],
  },
};

const StatisticsTab = () => {
  const [selectedYear, setSelectedYear] = useState(2023);
  const [selectedMonth, setSelectedMonth] = useState("January");

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setSelectedMonth("January");
  };

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
  };

  const data = fakeData[selectedYear]?.[selectedMonth] || [];

  return (
    <div>
      <div className={styles.statisticsTab}>
        <Chart className={styles.chart} data={data} />
        <div>
          <StatisticsDashboard
            selectedYear={selectedYear}
            selectedMonth={selectedMonth}
            onYearChange={handleYearChange}
            onMonthChange={handleMonthChange}
          />

          <StatisticsTable className={styles.statisticTable} data={data} />
        </div>
      </div>
    </div>
  );
};

export default StatisticsTab;
