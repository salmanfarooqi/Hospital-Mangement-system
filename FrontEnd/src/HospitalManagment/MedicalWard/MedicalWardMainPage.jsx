import React from "react";
import PendingMedicalWard from "./PendingMedicalWard";
import TotalMedicalWardMedicine from "./TotalMedicalWardMedicine";
import Navbar from "../Navbar/Navbar";

const MedicalWardMainPage = () => {
  return (
    <>
      <div className="flex m-10">
        <PendingMedicalWard />
        <TotalMedicalWardMedicine />
      </div>
    </>
  );
};

export default MedicalWardMainPage;
