import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chart from "chart.js/auto";
import "chartjs-adapter-moment";
// import { getOrders } from "../redux/features/actions/statistic";

const OrdersChart = ({ data }) => {
  console.log(data==undefined);
  console.log(data);
  
  console.log(typeof data);
  const [chart, setChart] = useState(null);
  const [interval, setInterval] = useState("year");

  useEffect(() => {

    const ordersData = data? typeof data=='object'?data:[] : [];

    const ordersByInterval = ordersData.reduce((acc, order) => {
      const date = order.createdAt.split("T")[0];
      const intervalDate = getIntervalDate(date, interval);
      acc[intervalDate] = acc[intervalDate] ? acc[intervalDate] + 1 : 1;
      return acc;
    }, {});

    const sortedOrdersByInterval = Object.entries(ordersByInterval).sort(
      ([date1], [date2]) => date1 - date2
    );

    const chartConfig = {
      type: "bar",
      data: {
        labels: sortedOrdersByInterval.map(([date]) => date),
        datasets: [
          {
            label: "Orders",
            data: sortedOrdersByInterval.map(([, count]) => count),
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            fill: true,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: "time",
            time: {
              unit: interval,
            },
            ticks: {
              source: "labels",
              precision: 0, 
          
            },
          },
          y: {
            beginAtZero: true,
            precision:0,
            ticks: {
              beginAtZero: true,
              stepSize: 1,
         
          },
        },
      },}
    };

    if (chart) {
      chart.destroy();
    }
    const newChart = new Chart(
      document.getElementById("orders-chart"),
      chartConfig
    );
    setChart(newChart);

    return () => {
      chart?.destroy();
    };
  }, [data, interval]);

  function getIntervalDate(date, interval) {
    switch (interval) {
      case "year":
        return date.split("-")[0];
      case "month":
        return date.split("-").slice(0, 2).join("-");
      case "week":
      default:
        return date;
    }
  }

  function handleIntervalChange(e) {
    setInterval(e.target.value);
  }

  return (
    <div>
      <div>
        <label>
          Interval:
          <select value={interval} onChange={handleIntervalChange}>
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="year">Year</option>
          </select>
        </label>
      </div>
      <canvas id="orders-chart" />
    </div>
  );
};

export default OrdersChart;
