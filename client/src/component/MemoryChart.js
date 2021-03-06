import { Doughnut } from "react-chartjs-2";
const MemoryChart = ({ freeMem, totalMem }) => {
  let free = freeMem / 1024 / 1024 / 1024;
  let used = (totalMem - freeMem) / 1024 / 1024 /1024;
  const data = {
    labels: ["Free Memory", "Used Memory"],
    datasets: [
      {
        label: "Memory",
        data: [
          Math.floor(free*100)/100,
          Math.floor(used*100)/100,
        ],
        backgroundColor: ["rgb(27, 93, 173)", "rgb(255,255,255)"],
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "rgb(255, 255, 255)",
        },
      },
      title: {
        display: true,
        text: "Disk Space in GB",
        color: "rgb(255,255,255)",
        font: {
          family: "Ubuntu",
          size: 23,
          lineHeight: 1.2,
          weight: "500",
        },
      },
    },
  };
  return (
    <>
      <Doughnut data={data} options={options} width="30%" />
    </>
  );
};

export default MemoryChart;
