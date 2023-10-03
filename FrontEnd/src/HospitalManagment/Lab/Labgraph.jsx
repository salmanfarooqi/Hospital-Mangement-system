import {
  LineChart,
  Line,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { pdata } from "../../Data";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Labgraph() {
  const [AttendenceData, setAttendenceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/");
        const getData = response.data.getTestData;
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
    const completedTests = AttendenceData.filter(
      (item) => item.date === date && item.status === "completed"
    );
    return { date, numberOfTests: completedTests.length };
  });

  return (
    <>
      <div className="bg-green-100 w-[1100px] h-[400px] mt-4 ml-2">
        <h1 className="text-center text-lg p-4">Test Graph</h1>
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart data={data}>
            <XAxis dataKey="date" interval={"preserveStartEnd"}></XAxis>
            <Tooltip />
            <Line dataKey="numberOfTests" activeDot={{ r: 8 }}></Line>
            <YAxis tickFormatter={(value) => Math.floor(value)} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default Labgraph;
