// import { Bar } from 'react-chartjs-2';

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
} from "recharts";
import { pdata } from "../../Data";
import { patientdata } from "../../Data";
function AttendenceGraph() {
  return (
    <>
      <div className="bg-green-100 w-[290px] h-[350px] mt-4 ml-2">
        <h1 className="text-center mt-2">patient statistics</h1>
        <div className="mt-4">
          <ResponsiveContainer width="100%" aspect={1}>
            <BarChart data={patientdata}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="month" />
              <Tooltip />
              <Legend />
              <YAxis datakey="patient" stroke="green" />
              <Legend />
              {/* <Bar  dataKey="year"  fill="#8884d8" contentStyle={{backgroundColor:'green'}}></Bar> */}
              <Bar dataKey="patient" fill="#8884d8"></Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-green-100 w-[820px] h-[350px] mt-4 ml-4">
        <h1 className="text-center mt-2">Revenue statistics</h1>
        <div></div>
        <div>
          <ResponsiveContainer width="90%" aspect={3}>
            <AreaChart data={pdata}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="year"
                interval={"preserveStartEnd"}
                stroke="green"
              />
              <Tooltip contentStyle={{ backgroundColor: "yellow" }} />
              <Legend />
              <YAxis stroke="green" />
              <Legend />
              <Area
                type="basic"
                dataKey="revenue"
                stroke="green"
                activeDot={{ r: 8 }}
              ></Area>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

export default AttendenceGraph;
