import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const CancelAppointment = () => {
  const [patientdata, setpatientdata] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const getpatientdata = (
        await axios.get("http://localhost:5000/getAppointments")
      ).data.getAppointment;
      console.log("gives data", getpatientdata);
      setpatientdata(getpatientdata);
    };

    fetchdata();
  }, []);

  patientdata.map((item) => {
    console.log("appointmet canle", item.firstName);
  });
  return (
    <div>
      <div>
        <div className="chart bg-green-100 w-[500px] h-[300px] mt-2 ml-2">
          <h1 className="text-center">Cancel Appointment</h1>

          {patientdata.map((item) => (
            <div className="flex pt-4 pl-4">
              <h1>
                {item.patientId.firstName + " " + item.patientId.lastName}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CancelAppointment;
