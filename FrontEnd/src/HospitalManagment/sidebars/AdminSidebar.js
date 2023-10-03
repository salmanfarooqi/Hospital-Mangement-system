import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function AdminSidebar() {
  const [activePage, setActivePage] = useState("home");
  const location = useLocation();

  // Update activePage state based on the current URL path
  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);
  return (
    <div className="w-[220px]  pt-3 ">
      <ul className="h-[100vh] fixed adminSidebar   pr-2 ">
        {/* Dashboard */}
        <Link to="/admin/Dashboard">
          <li
            className={`sideBarMenuStyle ${
              activePage == "/admin/Dashboard" ? "activePage" : ""
            }`}
          >
            <div>
              <img
                className="w-7  h-7"
                src="../images/dashboard.png"
                alt="image "
              />
            </div>
            <span className="text-lg pl-1">Admin Dashboard</span>
          </li>
        </Link>

        {/* Doctor */}
        <Link to="/admin/doctor">
          <li
            className={`sideBarMenuStyle ${
              activePage == "/admin/doctor" ? "activePage" : ""
            }`}
          >
            <div>
              <img className="w-7 h-7" src="../images/doctor.png" />
            </div>

            <span className="text-lg pl-1">Doctor</span>
          </li>
        </Link>

        {/* Nurse */}
        <Link to="/admin/Nurse">
          <li
            className={`sideBarMenuStyle ${
              activePage == "/admin/Nurse" ? "activePage" : ""
            }`}
          >
            <div>
              <img className="w-7 h-7" src="../images/patient.png" />
            </div>

            <span className="text-base pl-1">Nurse</span>
          </li>
        </Link>

        {/* Patient */}
        <Link to="/admin/patient">
          <li
            className={`sideBarMenuStyle ${
              activePage == "/admin/patient" ? "activePage" : ""
            }`}
          >
            <div>
              <img className="w-7  h-7" src="../images/patient.png" />
            </div>

            <span className="text-lg pl-1">Patient</span>
          </li>
        </Link>

        {/* Blood History */}
        <Link to="/admin/blood">
          <li
            className={`sideBarMenuStyle ${
              activePage == "/admin/blood" ? "activePage" : ""
            }`}
          >
            <div>
              <img className="w-7  h-7" src="../images/blood.png" />
            </div>

            <span className="text-lg pl-1">Blood</span>
          </li>
        </Link>

        {/* Medicine History */}
        <Link to="/admin/pharmacy">
          <li
            className={`sideBarMenuStyle ${
              activePage == "/admin/pharmacy" ? "activePage" : ""
            }`}
          >
            <div>
              <img className="w-7  h-7" src="../images/sidebar/medicine.png" />
            </div>

            <span className="text-lg pl-1">Pharmacy</span>
          </li>
        </Link>

        {/* Lab history */}
        <Link to="/admin/lab">
          <li
            className={`sideBarMenuStyle ${
              activePage == "/admin/lab" ? "activePage" : ""
            }`}
          >
            <div>
              <img className="w-7  h-7 " src="../images/sidebar/lab.png" />
            </div>

            <span className="text-lg pl-1">Lab </span>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default AdminSidebar;
