import { Outlet } from "react-router-dom";
import DoctorSidebar from "../sidebars/DoctorSidebar";
import Navbar from "../Navbar/Navbar";
function DoctorWebsite() {
  return (
    <>
      <Navbar />
      <div className="routeComponent flex">
        <div>
          <DoctorSidebar />
        </div>
        <div className="mainContent p-2">
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default DoctorWebsite;
