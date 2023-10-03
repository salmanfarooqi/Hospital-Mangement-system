import React from "react";
import { Link } from "react-router-dom";

const AtendenceReport = () => {
  return (
    <>
      <Link to="/AttendenceReportRecord">
        <div className="bg-blue-100  w-[290px]  h-[180px] mt-2 ml-4 flex ">
          <img className="w-50 h-20 mt-[40px]" src="./images/patient.png"></img>
          <div className=" innline-block">
            <h1 className=" mt-[40px] ml-10 text-lg">Attendence Report</h1>

            <h1 className="  ml-10">today </h1>
          </div>
        </div>
      </Link>
    </>
  );
};

export default AtendenceReport;
