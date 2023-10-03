import Patientnumber from "./Patientnumber";
import Testnumber from "./Testnumber";
import Mediciennumber from "./Mediciennumber";
import Totalrevenue from "./Totalrevenue";
import Nursenumber from "./Nursenumber";
// import Totalrevenue from './Totalrevenue';
import Bedsnumber from "./Bedsnumber";
import Graph from "./Graph";
import DashboardPieChart from "./DashboardPieChart";

import Navbar from "../Navbar/Navbar";
import Sidebar from "../sidebars/Sidebar";
import TotalPatient_fun from "./Patientnumber";
import Temp from "./Temp";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
// import Totalrevenue from './Totalrevenue';
function Dashboardcontent() {
  return (
    <>
      {/* <Navbar />
      <Sidebar /> */}

      <div className="relative top[5px] left-[0px]">
        <div className=" flex  flex-cols ">
          <Testnumber />

          <Mediciennumber />
          <Nursenumber />

          <Patientnumber />
        </div>

        <div className="flex ">
          <Graph />
          {/* <DashboardPieChart /> */}
        </div>
      </div>
    </>
  );
}

export default Dashboardcontent;
