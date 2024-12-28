import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const mockData = {
  2023: {
    March: [
      { category: "Main expenses", value: 8700 },
      { category: "Products", value: 3800.74 },
      { category: "Car", value: 1500 },
      { category: "Self care", value: 800 },
      { category: "Child care", value: 2208.5 },
      { category: "Household products", value: 300 },
      { category: "Education", value: 3400 },
      { category: "Leisure", value: 1230 },
      { category: "Other expenses", value: 610 },
    ],
    // Diğer aylar eklenebilir
  },
  // Diğer yıllar eklenebilir
};

const StatisticsDashboard = () => {
  const [selectedYear, setSelectedYear] = useState("2023");
  const [selectedMonth, setSelectedMonth] = useState("March");
  const [expensesData, setExpensesData] = useState([]);

  useEffect(() => {
    const data = mockData[selectedYear]?.[selectedMonth] || [];
    setExpensesData(data);
  }, [selectedYear, selectedMonth]);

  const chartData = {
    labels: expensesData.map((item) => item.category),
    datasets: [
      {
        label: "Expenses",
        data: expensesData.map((item) => item.value),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FFCD56",
          "#C9CBCF",
          "#36A2EB",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FFCD56",
          "#C9CBCF",
          "#36A2EB",
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Expenses for ${selectedMonth} ${selectedYear}`,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Statistics Dashboard</h2>
        <div className="flex gap-4">
          <select
            className="bg-white text-gray-800 p-2 rounded border"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            {Object.keys(mockData[selectedYear] || {}).map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
          <select
            className="bg-white text-gray-800 p-2 rounded border"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            {Object.keys(mockData).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow-md">
        <Doughnut data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default StatisticsDashboard;
