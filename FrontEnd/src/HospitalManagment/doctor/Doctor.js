import AbsentDoctor from "./AbsentDoctor";
import LeaveDoctor from "./LeaveDoctor";
import NumberDoctor from "./NumberDoctor";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Dashboardcontent from "../Dashboardcontent/Dashboardcontent";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../sidebars/Sidebar";
import DoctorGraph from "./DoctorGraph";
// import { Link } from "react-router-dom";

function Doctor() {
  return (
    <>
      {/* <Navbar/> */}

      {/* 
            <Navbar />
            <Sidebar /> */}

      <div className="relative top-[10px] ]">
        <div className="ml-[950px]">
          <Link to="/doctorsignup">
            <button className="px-4 py-1 ml-2 shadow-md border-none rounded-lg border-green-100">
              Add doctor
            </button>
          </Link>
          {/* <button className='bg-green-500 px-2 py-1 ' onClick={Testfun}>search</button>  */}
        </div>
        <div className="flex">
          <NumberDoctor />
          <LeaveDoctor />
          <AbsentDoctor />
        </div>
        {/* <DoctorGraph /> */}
      </div>
    </>
  );
}
export default Doctor;
