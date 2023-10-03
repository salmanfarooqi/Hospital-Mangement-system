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
import DashboardPieChart from "./DashboardPieChart";
import DashboardLineChart from "./DashboardLineChart";
function Graph() {
  return (
    <>
      <div className="bg-green-100 w-[290px] h-[350px] mt-4 ml-2">
        <h1 className="text-center mt-2">patient statistics</h1>
        <div className="mb-[350px]">
          <DashboardPieChart />
        </div>
      </div>

      <div className="bg-green-100 w-[820px] h-[350px] mt-4 ml-4">
        <DashboardLineChart />
      </div>
    </>
  );
}

export default Graph;
