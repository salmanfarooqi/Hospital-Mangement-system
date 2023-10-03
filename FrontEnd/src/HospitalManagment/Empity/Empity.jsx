import { Outlet } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
function Empity() {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="mainContent p-2">
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default Empity;
