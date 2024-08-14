import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Rectangle,
} from "recharts";

const data = [
  {
    name: "Jan",
    Video: 4000,
    Practice: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    Video: 3000,
    Practice: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    Video: 2000,
    Practice: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    Video: 2780,
    Practice: 3908,
    amt: 2000,
  },
  {
    name: "Jun",
    Video: 1890,
    Practice: 4800,
    amt: 2181,
  },
  {
    name: "July",
    Video: 2390,
    Practice: 3800,
    amt: 2500,
  },
  {
    name: "Aug",
    Video: 3490,
    Practice: 4300,
    amt: 2100,
  },
  {
    name: "Sep",
    Video: 3490,
    Practice: 4300,
    amt: 2100,
  },
  {
    name: "Oct",
    Video: 3490,
    Practice: 4300,
    amt: 2100,
  },
  {
    name: "Nov",
    Video: 3490,
    Practice: 4300,
    amt: 2100,
  },
  {
    name: "Dec",
    Video: 3490,
    Practice: 4300,
    amt: 2100,
  },
];


const ActivityChart = () => {
  return (
    <BarChart
      width={650}
      height={300}
      data={data}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis/>
      <Bar
        dataKey="Video"
        fill="#7890f0"
        activeBar={<Rectangle fill="#7890f0" stroke="#7890f0" />}
      />
      <Bar
        dataKey="Practice"
        fill="#1e2e69"
        activeBar={<Rectangle fill="#1e2e69" stroke="#1e2e69" />}
      />
    </BarChart>
  );
};
export default ActivityChart;