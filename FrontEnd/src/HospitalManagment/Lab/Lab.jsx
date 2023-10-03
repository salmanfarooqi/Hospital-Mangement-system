import TotalTest from "./TotalTest";
import Labgraph from "./Labgraph";
import TotalXray from "./TotalXray";
import TotalUltrasound from "./TotalUltrasound";
import TodayTest from "./TodayTest";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../sidebars/Sidebar";

import { Link } from "react-router-dom";
import BloodTest from "./BloodTest";

function Lab() {
  return (
    // Lab card start

    <>
      {/* <Navbar />
      <Sidebar /> */}
      <div className="relative top-[10px] ">
        <div className=" flex ml-1">
          <TotalTest />
          <TotalXray />
          <TotalUltrasound />
          <BloodTest />
        </div>
        <Labgraph />
      </div>
    </>
  );
}

export default Lab;
