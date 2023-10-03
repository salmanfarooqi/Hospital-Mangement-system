// import Sidebar from "../Sidebar";
// import Navbar from "../../Navbar/Navbar";
import { useState } from "react";
// import Testnumber from "../../Dashboardcontent/Testnumber";
// import AtendenceReport from "./AtendenceReport";
// import AttedenceChart from "./AttedenceChart";
// import Attendenceshortage from "./Attendenceshortage";
// import AttendenceGraph from "../../Dashboardcontent/AttendenceGraph";
import Testnumber from "../Dashboardcontent/Testnumber";
import AtendenceReport from "../attendence/AtendenceReport";
import TakingAttendence from "./TakingAttendence";
import Attendenceshortage from "../attendence/Attendenceshortage";
import Sidebar from "../sidebars/Sidebar";
import Navbar from "../Navbar/Navbar";

import AttendenceGraph from "./AttendenceGraph";
import AttendenceHistory from "./AttendenceHistory";
const Atendence = () => {
  const [attendence, setattendence] = useState("");

  return (
    <>
      <div>{/* <Sidebar /> */}</div>
      <div className="relative top-[10px] ">
        <div className=" flex  flex-cols flex-wrap">
          <AtendenceReport />

          {/* <Attendenceshortage /> */}
          <AttendenceHistory />
          <TakingAttendence />
        </div>
        <div className="flex">
          <AttendenceGraph />
        </div>
      </div>
    </>
  );
};
export default Atendence;
