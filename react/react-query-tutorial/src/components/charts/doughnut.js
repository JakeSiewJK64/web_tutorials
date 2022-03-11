import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["red", "blue", "yellow", "green", "purple", "orange"],
  datasets: [
    {
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ["red", "blue", "yellow", "green", "purple", "orange"],
    },
  ],
  borderWidth: 1,
};

export default function DoughnutChart() {
  return (
    <div>
      <h1>DoughnutChart</h1>
      <Doughnut data={data} />
    </div>
  );
}
