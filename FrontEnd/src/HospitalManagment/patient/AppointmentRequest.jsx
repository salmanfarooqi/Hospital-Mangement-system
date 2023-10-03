import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const AppointmentRequest = () => {
  const [patientdata, setpatientdata] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const getpatientdata = (await axios.get("http://localhost:5000/patients"))
        .data.appoin;
      console.log("gives data", getpatientdata);
      setpatientdata(getpatientdata);
    };

    fetchdata();

    console.log("pat", patientdata);
  }, []);
  return (
    <div>
      <div>
        <div className="chart bg-green-100 w-[500px] h-[300px] mt-2 ml-2">
          <h1 className="text-center">Appointment Requestes</h1>
          <div className="flex pt-4 pl-4">
            <h1>request</h1>
            {patientdata.map((item) => {
              <div>
                <h1>{item.firstName}</h1>
                <h1>data</h1>
              </div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentRequest;
