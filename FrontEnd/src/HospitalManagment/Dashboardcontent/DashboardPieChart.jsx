import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Label, Tooltip } from "recharts";
import axios from "axios";

const CustomLabel = ({ viewBox, value, x, y }) => {
  return (
    <text
      x={x}
      y={y}
      dy={8}
      textAnchor="middle"
      fill="#333333"
      fontSize={14}
      fontWeight="bold"
    >
      {value}
    </text>
  );
};

const DashboardPieChart = () => {
  const [patientdata, setPatientData] = useState([]);
  const [maleCounter, setMaleCounter] = useState(0);
  const [femaleCounter, setFemaleCounter] = useState(0);

  const COLORS = ["#0088FE", "#00C49F"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = (await axios.get("http://localhost:5000/patients"))
          .data.patient;
        setPatientData(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let maleCount = 0;
    let femaleCount = 0;

    patientdata.forEach((item) => {
      if (item.gender === "Male") {
        maleCount++;
      } else if (item.gender === "Female") {
        femaleCount++;
      }
    });

    setMaleCounter(maleCount);
    setFemaleCounter(femaleCount);
  }, [patientdata]);

  const data = [
    { name: "Male", value: maleCounter },
    { name: "Female", value: femaleCounter },
  ];

  return (
    <div className="relative bottom-[80px] right-[60px]">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          labelLine={false}
          label={(props) => (
            <CustomLabel {...props} x={200} y={200} value={props.value} />
          )}
        >
          <Tooltip contentStyle={{ backgroundColor: "yellow" }} />

          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="relative bottom-[60px] left-[10px]">
          <span style={{ color: COLORS[0], fontWeight: "bold" }}>Male:</span>{" "}
          {maleCounter}
          {console.log("male count is :", maleCounter)}
        </div>
        <div className="relative bottom-[60px] left-[20px] ml-4">
          <span style={{ color: COLORS[1], fontWeight: "bold" }}>Female:</span>{" "}
          {femaleCounter}
        </div>
      </div>
    </div>
  );
};

export default DashboardPieChart;
