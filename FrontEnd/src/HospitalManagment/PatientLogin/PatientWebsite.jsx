import { Outlet } from "react-router-dom";

import PatientSidebar from "../sidebars/PatientSidebar";
import Navbar from "../Navbar/Navbar";

function PatientWebsite() {
  return (
    <>
      <Navbar />
      <div className="routeComponent flex">
        <div>
          <PatientSidebar />
        </div>
        <div className="mainContent p-2">
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default PatientWebsite;
