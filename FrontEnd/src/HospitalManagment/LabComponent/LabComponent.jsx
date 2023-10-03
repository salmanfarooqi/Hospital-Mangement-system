import Sidebar from "../sidebars/Sidebar";
import { Link } from "react-router-dom";
import TodayTest from "../Lab/TodayTest";
import TotalTest from "../Lab/TotalTest";
import TotalXray from "../Lab/TotalXray";
import TotalUltrasound from "../Lab/TotalUltrasound";
import Navbar from "../Navbar/Navbar";
import Labgraph from "../Lab/Labgraph";
import PendingTest from "./pendingTest";
import ProcessTest from "./processTest";
import TotalTests from "./TotalTests";

function LabComponent() {
  return (
    // LabComponent card start

    <>
      {/* <Navbar /> */}
      {/* <Sidebar/> */}
      <div className="relative top-[10px]  left-[150px]">
        {/* <div className="ml-[950px]">
          <Link to="/Addtest">
            <button className="px-4 py-1 ml-2 shadow-md border-none rounded-lg border-green-100">
              Add test
            </button>
          </Link>
          {/* <button className='bg-green-500 px-2 py-1 ' onClick={Testfun}>search</button>  */}
        {/* </div>  */}
        <div className=" flex ml-1">
          <TotalTests />
          <ProcessTest />

          <PendingTest />
        </div>
        <Labgraph />
      </div>
    </>
  );
}

export default LabComponent;
