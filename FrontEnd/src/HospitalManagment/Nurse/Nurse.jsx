import LeaveNurse from "./LeaveNurse";
import TotalNurse from "./TotalNurse";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Nursenumber from "../Dashboardcontent/Nursenumber";
import AbsentNurse from "./AbsentNurse";
// import LeaveNurse from "./LeaveNurse";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../sidebars/Sidebar";
import NurseGraph from "./NurseGraph";

function Nurse() {
  return (
    <>
      {/* <div className="">
        <Sidebar />
      </div> */}
      <div className="relative top-[10px] left-[0px]">
        <div className="ml-[950px] ">
          <Link to="/admin/AddNurse">
            <button className="px-4 py-1 ml-2 shadow-md border-none rounded-lg border-green-100">
              Add Nurse
            </button>
          </Link>
          {/* <button className='bg-green-500 px-2 py-1 ' onClick={Testfun}>search</button>  */}
        </div>
        <div className="flex">
          <AbsentNurse />
          <LeaveNurse />
          <TotalNurse />
        </div>
        {/* <NurseGraph /> */}
      </div>
    </>
  );
}

export default Nurse;
