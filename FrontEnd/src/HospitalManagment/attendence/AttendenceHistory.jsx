import React from "react";
import { Link } from "react-router-dom";

const AttendenceHistory = () => {
  return (
    <>
      <Link to="/AttendenceHistoryRecord">
        <div className="bg-blue-100  w-[290px]  h-[180px] mt-2 ml-4 flex ">
          <img className="w-50 h-20 mt-[40px]" src="./images/patient.png"></img>
          <div className=" innline-block">
            <h1 className=" mt-[50px] ml-5 text-lg ">Attendence History</h1>
          </div>
        </div>
      </Link>
    </>
  );
};

export default AttendenceHistory;
