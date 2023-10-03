import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
function BloodGraph() {
  const [bloodData, setBloodData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/");
        const getData = response.data.getBloodData;
        setBloodData(getData);
        console.log("bloodData", getData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const data = bloodData.map((item) => {
    return { bloodGroup: item.bloodGroup, bloodQuantity: item.bloodQuantity };
  });

  return (
    <>
      <div className="bg-green-100 w-[1100px] h-[400px] mt-4 ml-2">
        <h1 className="text-center text-lg p-4">Test Graph</h1>
        <ResponsiveContainer width="100%" aspect={4}>
          <LineChart data={data}>
            <XAxis type="category" dataKey="bloodGroup" />
            <YAxis type="number" dataKey="bloodQuantity" />
            <Tooltip />
            <Line dataKey="bloodQuantity" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
export default BloodGraph;
