import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const TotalPatient = () => {
  const [patientdata, setpatientdata] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const getpatientdata = (await axios.get("http://localhost:5000/patients"))
        .data.patient;
      // console.log("data",getpatientdata)
      setpatientdata(getpatientdata);
    };

    fetchdata();

    console.log("pat", patientdata);
  }, []);
  return (
    <div>
      <Link to="/admin/TotalPatientRecord">
        <div className="bg-blue-100 ml-2 w-[320px]  h-[180px] mt-2 flex ">
          <img
            className="w-50 h-20 mt-[40px]"
            src="../images/patient.png"
          ></img>
          <div className=" innline-block">
            <h1 className=" mt-[40px] ml-10">total patient </h1>
            <h1 className="  ml-10 text-green-500 text-2xl">
              {patientdata.length}{" "}
            </h1>
            <h1 className="  ml-10">till date </h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TotalPatient;
