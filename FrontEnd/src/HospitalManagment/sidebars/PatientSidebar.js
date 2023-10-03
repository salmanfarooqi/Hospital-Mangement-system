import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function PatientSidebar() {
  const [activePage, setActivePage] = useState("home");
  const location = useLocation();

  // Update activePage state based on the current URL path
  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  return (
    <>
      <div className="w-[220px]  pt-3 mr-2">
        <ul className="h-[100vh] fixed   pr-2 patientSidebar">
          {/* Profile */}
          <Link to="/patient/profile">
            <li
              className={`sideBarMenuStyle ${
                activePage == "/patient/profile" ? "activePage" : ""
              }`}
            >
              <div>
                <img className="w-7  h-7" src="../images/patient.png" />
              </div>

              <span className="text-lg pl-1">Profile</span>
            </li>
          </Link>

          {/* Dashboard */}
          <Link to="/patient/dashboard">
            <li
              className={`sideBarMenuStyle ${
                activePage == "/patient/dashboard" ? "activePage" : ""
              }`}
            >
              <div>
                <img
                  className="w-7  h-7"
                  src="../images/dashboard.png"
                  alt="image "
                />
              </div>
              <span className="text-lg pl-1">Dashboard</span>
            </li>
          </Link>

          {/* Book Appointment history */}
          <Link to="/patient/appointment">
            <li
              className={`sideBarMenuStyle ${
                activePage == "/patient/appointment" ? "activePage" : ""
              }`}
            >
              <div>
                <img
                  className="w-7 h-7"
                  src="../images/sidebar/calenderPlus.png"
                />
              </div>

              <span className="text-lg pl-1">Book Appointment</span>
            </li>
          </Link>

          {/* Appointment history */}
          <Link to="/patient/appointmenthistory">
            <li
              className={`sideBarMenuStyle ${
                activePage == "/patient/appointmenthistory" ? "activePage" : ""
              }`}
            >
              <div>
                <img
                  className="w-7 h-7"
                  src="../images/sidebar/appointmentsCalendar.png"
                />
              </div>

              <span className="text-base pl-1">Appointment Record</span>
            </li>
          </Link>

          {/* Blood History */}
          <Link to="/patient/bloodhistory">
            <li
              className={`sideBarMenuStyle ${
                activePage == "/patient/bloodhistory" ? "activePage" : ""
              }`}
            >
              <div>
                <img className="w-7  h-7" src="../images/blood.png" />
              </div>

              <span className="text-lg pl-1">Blood Record</span>
            </li>
          </Link>

          {/* Injections history */}
          <Link to="/patient/medicalhistory">
            <li
              className={`sideBarMenuStyle ${
                activePage == "/patient/medicalhistory" ? "activePage" : ""
              }`}
            >
              <div>
                <img
                  className="w-7  h-7 "
                  src="../images/sidebar/injection.png"
                />
              </div>

              <span className="text-lg pl-1">Injection Record</span>
            </li>
          </Link>

          {/* Medicine History */}
          <Link to="/patient/pharmacyhistory">
            <li
              className={`sideBarMenuStyle ${
                activePage == "/patient/pharmacyhistory" ? "activePage" : ""
              }`}
            >
              <div>
                <img
                  className="w-7  h-7"
                  src="../images/sidebar/medicine.png"
                />
              </div>

              <span className="text-lg pl-1">Pharmacy Record</span>
            </li>
          </Link>

          {/* Lab history */}
          <Link to="/patient/labhistory">
            <li
              className={`sideBarMenuStyle ${
                activePage == "/patient/labhistory" ? "activePage" : ""
              }`}
            >
              <div>
                <img className="w-7  h-7 " src="../images/sidebar/lab.png" />
              </div>

              <span className="text-lg pl-1">Lab Record</span>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default PatientSidebar;
