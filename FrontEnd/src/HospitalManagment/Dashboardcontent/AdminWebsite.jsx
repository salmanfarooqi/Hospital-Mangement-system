import { Outlet } from "react-router-dom";

import AdminSidebar from "../sidebars/AdminSidebar";

import Navbar from "../Navbar/Navbar";
function AdminWebsite() {
  return (
    <>
      <Navbar />
      <div className="routeComponent ">
        <div>
          <AdminSidebar />
        </div>
        <div className="ml-[220px] mainContent ">
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default AdminWebsite;
