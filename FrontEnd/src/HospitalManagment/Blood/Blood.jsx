// import Dashboardcontent from "./Dashboardcontent";

import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import AvailableBlood from "./AvailableBlood";
import RequiredBlood from "./TotalBloodHistory";
import RemaningBlood from "./RemaningBlood";
import Navbar from "../Navbar/Navbar";
import BloodGraph from "./BloodGraph";
import Sidebar from "../sidebars/Sidebar";
import TotalBloodHistory from "./TotalBloodHistory";
import PendingBlood from "../BloodComponent/PendingBlood";
function Blood() {
  return (
    <>
      {/* <Navbar />
      <div className="">
        <Sidebar />
      </div> */}

      {/* <div className="bg-sky-500 w-[1180px] h-[80px] relative bottom-[720px] 
             shadow-sm shadow-sky-500 shadow-inner  pt-4 left-[185px] ml-[0px] pl-4">Admin dashboad</div> */}

      <div className="relative top-[10px]">
        <div className="flex">
          <AvailableBlood />
          {/* <TotalBloodHistory /> */}
          <RemaningBlood />
          {/* <PendingBlood /> */}
        </div>
        <BloodGraph />
      </div>
    </>
  );
}

export default Blood;
