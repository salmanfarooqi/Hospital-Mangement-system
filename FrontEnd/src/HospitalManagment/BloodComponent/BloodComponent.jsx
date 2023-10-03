// import Dashboardcontent from "./Dashboardcontent";

import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Navbar from "../Navbar/Navbar";

import Sidebar from "../sidebars/Sidebar";
import AvailableBlood from "../Blood/AvailableBlood";
import RequiredBlood from "../Blood/TotalBloodHistory";
import BloodGraph from "../Blood/BloodGraph";
import RemaningBlood from "../Blood/RemaningBlood";
import PendingBlood from "./PendingBlood";
import TotalBlood from "./TotalBlood";
function BloodComponent() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <div className="">
        <Sidebar />
      </div> */}

      {/* <div className="bg-sky-500 w-[1180px] h-[80px] relative bottom-[720px] 
             shadow-sm shadow-sky-500 shadow-inner  pt-4 left-[185px] ml-[0px] pl-4">Admin dashboad</div> */}

      <div className="relative  top-[10px] ">
        <div className="ml-[950px] mt-4">
          <Link to="/blood/Addblood">
            <button className="px-4 py-1 ml-2 shadow-md border-none rounded-lg border-green-100">
              Add Blood
            </button>
          </Link>
        </div>

        <div className="flex">
          {/* <AvailableBlood/>
        <RequiredBlood/>
        <RemaningBlood/> */}
          <TotalBlood />
          <RemaningBlood />
          {/* <RequiredBlood /> */}
          <PendingBlood />
        </div>
        <BloodGraph />
      </div>
    </>
  );
}

export default BloodComponent;
