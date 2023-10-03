import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const DashboardLineChart = () => {
  const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/patients");
        const patientData = response.data.patient;
        setPatientData(patientData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const getPatientCountByDate = () => {
    const patientCountByDate = {};

    patientData.forEach((item) => {
      const date = item.date;
      if (patientCountByDate[date]) {
        patientCountByDate[date]++;
      } else {
        patientCountByDate[date] = 1;
      }
    });

    return patientCountByDate;
  };

  const patientCountByDate = getPatientCountByDate();

  const chartData = Object.keys(patientCountByDate).map((date) => ({
    date,
    count: Math.floor(patientCountByDate[date]),
  }));

  const uniqueDates = [...new Set(chartData.map((data) => data.date))];

  return (
    <div>
      <h1 className="text-center mt-2 text-lg">
        Number of Patients Registered on Each Date
      </h1>
      <div className="relative top-[50px]">
        <ResponsiveContainer width="90%" aspect={3}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              stroke="blue"
              // angle={-45}
              textAnchor="end"
              interval={0}
            />
            <YAxis stroke="blue" allowDecimals={false} />
            <Tooltip contentStyle={{ backgroundColor: "gray" }} />
            <Legend />
            <Line
              type="monotone"
              dataKey="count"
              name="Number of Patients"
              stroke="green"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardLineChart;
