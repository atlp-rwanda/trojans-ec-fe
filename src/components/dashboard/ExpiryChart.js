import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const ExpiryChart = ({ expired, notExpired }) => {
  const data = {
    labels: ["Expired", "Not Expired"],
    datasets: [
      {
        data: [expired, notExpired],
        backgroundColor: ["#D23D4F", "#5F3E8E"],
      },
    ],
  };

  const options = {
    // Add any chart options here
  };

  return <Doughnut data={data} options={options} width={300} height={300} />;
};

export default ExpiryChart;
