import Sidebar from "../sidebars/Sidebar";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

import RemaningMedicine from "../pharmacy/RemaningMedicine";

import ExpiredMedicine from "../pharmacy/ExpiredMedicine";
import OutStock from "../pharmacy/OutStock";
import SoldMedicine from "./SoldMedicine";

import PendingMedicine from "./PendingMedicine";
import Totalmedicine from "../pharmacy/TotalMedicine";
import TotalMedicines from "./TotalMedicines";
// import pendingPharmacy from "./PendingPharmacy";
function Pharmacy() {
  return (
    <>
      {/* <Navbar />
      <Sidebar/> */}

      <div className="relative bottom-[40px] left-[80px]">
        <div className="ml-[900px] mt-10">
          <Link to="/pharmacy/Addmedicine">
            <button className="  shadow-md border-none rounded-lg border-green-100">
              Add medicine
            </button>
          </Link>
        </div>
        <div className=" flex ml-1">
          <TotalMedicines />
          <PendingMedicine />
          <SoldMedicine />
        </div>
        <div className="flex">
          {/* <MedicineGraph/> */}

          {/* <ExpiredMedicine />
          <OutStock /> */}

          <ExpiredMedicine />
          <OutStock />
        </div>
      </div>
    </>
  );
}

export default Pharmacy;
