import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function DoctorSidebar() {
  const [activePage, setActivePage] = useState("home");
  const location = useLocation();

  // Update activePage state based on the current URL path
  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);
  return (
    <div className=" w-[220px] pr-0 pt-2 mr-2">
      <ul className="h-[100vh] fixed pr-2  doctorSidebar rounded-xl">
        {/* Profile */}
        <Link to="/doctor/profile">
          <li
            className={`sideBarMenuStyle ${
              activePage == "/doctor/profile" ? "activePage" : ""
            }`}
          >
            <div>
              <img className="w-7  h-7" src="../images/doctor.png" />
            </div>

            <span className="text-lg pl-1">Profile</span>
          </li>
        </Link>

        {/* Dashboard */}
        <Link to="/doctor/dashboard">
          <li
            className={`sideBarMenuStyle ${
              activePage == "/doctor/dashboard" ? "activePage" : ""
            }`}
          >
            <div>
              <img
                className="w-7  h-7 "
                src="../images/dashboard.png"
                alt="image "
              />
            </div>
            <span className="text-lg pl-1">Dashboard</span>
          </li>
        </Link>

        {/* Post-Procedure Patients */}
        <Link to="/doctor/postprocedurepatient">
          <li
            className={`sideBarMenuStyle ${
              activePage == "/doctor/postprocedurepatient" ? "activePage" : ""
            }`}
          >
            <div>
              <img className="w-7  h-7" src="../images/patient.png" />
            </div>

            <span className="text-base pl-1">Post-Process Patients</span>
          </li>
        </Link>

        {/* Appointment history */}
        <Link to="/doctor/appointmenthistory">
          <li
            className={`sideBarMenuStyle ${
              activePage == "/doctor/appointmenthistory" ? "activePage" : ""
            }`}
          >
            <div>
              <img className="w-7  h-7" src="../images/pharmacy.png" />
            </div>

            <span className="text-base pl-1">Appointment Record</span>
          </li>
        </Link>

        {/* Blood History */}
        <Link to="/doctor/bloodhistory">
          <li
            className={`sideBarMenuStyle ${
              activePage == "/doctor/bloodhistory" ? "activePage" : ""
            }`}
          >
            <div>
              <img className="w-7  h-7 " src="../images/blood.png" />
            </div>

            <span className="text-lg pl-1">Blood Record</span>
          </li>
        </Link>

        {/* Injections history */}
        <Link to="/doctor/medicalhistory">
          <li
            className={`sideBarMenuStyle ${
              activePage == "/doctor/medicalhistory" ? "activePage" : ""
            }`}
          >
            <div>
              <img className="w-7  h-7" src="../images/sidebar/injection.png" />
            </div>

            <span className="text-lg pl-1">Injection Record</span>
          </li>
        </Link>

        {/* Medicine History */}
        <Link to="/doctor/pharmacyhistory">
          <li
            className={`sideBarMenuStyle ${
              activePage == "/doctor/pharmacyhistory" ? "activePage" : ""
            }`}
          >
            <div>
              <img className="w-7  h-7 " src="../images/sidebar/medicine.png" />
            </div>

            <span className="text-lg pl-1">Pharmacy Record</span>
          </li>
        </Link>

        {/* Lab history */}
        <Link to="/doctor/labhistory">
          <li
            className={`sideBarMenuStyle ${
              activePage == "/doctor/labhistory" ? "activePage" : ""
            }`}
          >
            <div>
              <img className="w-7  h-7" src="../images/sidebar/lab.png" />
            </div>

            <span className="text-lg pl-1">Lab Record</span>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default DoctorSidebar;
