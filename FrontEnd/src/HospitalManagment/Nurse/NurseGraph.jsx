import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";
import axios from "axios";
import { useState, useEffect } from "react";

const NurseGraph = () => {
  const [AttendenceData, setAttendenceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/");
        const getData = response.data.getAttendenceData;
        setAttendenceData(getData);
        console.log("attendance", getData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  let myset = new Set();
  AttendenceData.forEach((item) => {
    myset.add(item.date);
  });
  let myarray = Array.from(myset).sort(); // Sort the dates in ascending order
  console.log("arr", myarray);

  const data = myarray.map((date) => {
    const presentDoctors = AttendenceData.filter(
      (item) =>
        item.date === date &&
        item.employ === "Nurse" &&
        item.attendences === "present"
    );
    return { date, doctor: presentDoctors.length };
  });

  return (
    <div>
      <div className="bg-green-100 w-auto h-[300px] ml-2 mt-4">
        <h1 className="text-center pt-2">Nurse Attendance Report</h1>

        <div className="bg-green-100">
          <ResponsiveContainer width="100%" aspect={3}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="date" />
              <YAxis tickFormatter={(value) => Math.floor(value)} />
              <Tooltip />
              <Legend />
              <Bar
                type="monotone"
                dataKey="doctor"
                name="Number of Nurse"
                stroke="#8884d8"
                fill="#8884d8"
                barSize={50}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default NurseGraph;
