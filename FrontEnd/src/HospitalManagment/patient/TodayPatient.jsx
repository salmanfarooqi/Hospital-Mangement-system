import React from "react";

const TodayPatient = () => {
  return (
    <div>
      <div className="bg-blue-100 ml-2 w-[320px]  h-[180px] mt-2 flex">
        <img className="w-50 h-20 mt-[40px]" src="../images/patient.png"></img>
        <div className=" innline-block">
          <h1 className=" mt-[40px] ml-10">today patient </h1>
          <h1 className="  ml-10 text-green-500 text-2xl">200 </h1>
          <h1 className="  ml-10">1 march 2023 </h1>
        </div>
      </div>
    </div>
  );
};

export default TodayPatient;
