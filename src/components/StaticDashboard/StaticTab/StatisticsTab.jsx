import StatisticsDashboard from "../StatisticsDashboard/StatisticsDashboard";
import StatisticsTable from "../StatisticsTable/StatisticsTable";
import Chart from "../Chart/Chart";
import styles from "./StatisticsTab.module.css";

const StatisticsTab = () => {

  return (
    <div>
      <div className={styles.statisticsTab}>
        <Chart className={styles.chart}/>
        <div>
          <StatisticsDashboard />
          <StatisticsTable className={styles.statisticTable} />
        </div>
      </div>
    </div>
  );
};

export default StatisticsTab;
