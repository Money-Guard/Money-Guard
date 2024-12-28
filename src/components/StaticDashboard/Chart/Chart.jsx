import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartWithCenterText = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3],
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
        text: "24000",
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

  // Eklentiyi kaydet
  ChartJS.register(centerTextPlugin);

  return <Doughnut data={data} options={options} />;
};

export default ChartWithCenterText;
