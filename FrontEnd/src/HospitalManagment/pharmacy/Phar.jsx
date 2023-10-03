import TotalMedicineHistory from "./TotalMedicineHistory";
import RemaningMedicine from "./RemaningMedicine";
import SoldMedicine from "../PharmacyComponent/SoldMedicine";
import TotalMedicine from "./TotalMedicine";
import MedicineGraph from "./MedicineGraph";
import ExpiredMedicine from "./ExpiredMedicine";
import OutStock from "./OutStock";
import Sidebar from "../sidebars/Sidebar";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import SoldMedicines from "./SoldMedicines";

function Phar() {
  return (
    <>
      {/* <Navbar />
      <Sidebar /> */}

      <div className="relative top-[10px] left-[0px]">
        <div className=" flex ml-4">
          <TotalMedicine />
          <RemaningMedicine />
          <SoldMedicines />
        </div>
        <div className="flex">
          {/* <MedicineGraph/> */}

          <ExpiredMedicine />
          <OutStock />
        </div>
      </div>
    </>
  );
}

export default Phar;
