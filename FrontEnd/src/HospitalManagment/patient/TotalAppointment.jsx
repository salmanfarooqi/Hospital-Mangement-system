import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const TotalAppointment = () => {
  const [patientdata, setpatientdata] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const getpatientdata = (
        await axios.get("http://localhost:5000//appointment")
      ).data;
      console.log("appointmntdata", getpatientdata);
      setpatientdata(getpatientdata);
    };

    fetchdata();

    console.log("pat", patientdata);
  }, []);
  return (
    <div>
      <div className="bg-blue-100 ml-2 w-[320px]  h-[180px] mt-2 flex">
        <img className="w-50 h-20 mt-[40px]" src="../images/patient.png"></img>
        <div className=" innline-block">
          <h1 className=" mt-10 ml-10"> Appointment </h1>
          <h1 className="  ml-10 text-green-500 text-2xl">
            {patientdata.length}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TotalAppointment;
