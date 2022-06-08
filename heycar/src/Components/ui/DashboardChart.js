import React from "react";
import { Doughnut } from "react-chartjs-2";

/**
 *
 * @returns Dashboard chart 
 */
const DashboardChart = (props) => {
  let { localReportValues, localReportAverageValues } = props;
  const state = {
    labels: Object.keys(localReportValues),
    datasets: [
      {
        data: localReportAverageValues,
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
        ],
      },
    ],
  };

  return (
    <Doughnut
      sx={{ p: "0px" }}
      data={state}
      options={{
        plugins: {
          legend: {
            display: true,
            position: "top",
            align: "start",
            labels: {
              usePointStyle: true,
            },
          },
        },

        maintainAspectRatio: false,
      }}
    />
  );
};

export default DashboardChart;
