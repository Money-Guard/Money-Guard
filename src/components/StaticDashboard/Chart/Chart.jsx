import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useSelector } from "react-redux";
import { selectTransactionsByDate } from "../../../redux/transaction/selectors";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartWithCenterText = () => {
  // Veriyi Redux'dan alıyoruz
  const transactions = useSelector(selectTransactionsByDate);

  // Verilerle chart için data hazırlıyoruz
  const data = {
    labels: transactions?.categoriesSummary?.map((item) => item.name), // Kategoriler
    datasets: [
      {
        label: "value", // Etiket
        data: transactions?.categoriesSummary?.map((item) => item.total), // Miktarları alıyoruz
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Tüm transaction'ların toplamını hesapla
  const totalAmount = transactions?.categoriesSummary?.reduce((sum, item) => sum + item.total, 0);

  const options = {
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        enabled: true,
      },
      // Özel eklenti
      centerText: {
        display: true,
        text: totalAmount,
      },
    },
  };

  // Özel eklentiyi tanımlama ve kaydetme
  const centerTextPlugin = {
    id: "centerText",
    beforeDraw: (chart) => {
      if (
        chart.config.options.plugins.centerText.display !== null &&
        typeof chart.config.options.plugins.centerText.display !==
          "undefined" &&
        chart.config.options.plugins.centerText.display
      ) {
        const ctx = chart.ctx;
        const centerText = chart.config.options.plugins.centerText.text;

        ctx.save();
        const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
        const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "bold 24px sans-serif";
        ctx.fillText(centerText, centerX, centerY);
        ctx.restore();
      }
    },
  };

  ChartJS.register(centerTextPlugin);

  return <Doughnut data={data} options={options} style={{margin:'40px 0'}} />;
};

export default ChartWithCenterText;
