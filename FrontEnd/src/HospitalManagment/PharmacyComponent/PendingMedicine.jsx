import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const PendingMedicine = () => {
  let pendingMedicineCounter = 0;
  const [pendingmedicine, setpendingmedicine] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const getMedicineData = (await axios.get("http://localhost:5000")).data
        .getDoctorSendingMedicine;
      console.log("getdata", getMedicineData);

      setpendingmedicine(getMedicineData);
      console.log("data is ", pendingmedicine);

      // const output=getMedicineData
    };
    fetchdata();
    console.log("Medicine data", pendingmedicine);
  }, []);
  let pendingmedicineNumber = () => {
    pendingmedicine.map((item) => {
      if (item.status === "pending") {
        pendingMedicineCounter = pendingMedicineCounter + 1;
        console.log("pending done");
      }
    });
  };
  pendingmedicineNumber();

  return (
    <div>
      <Link to="/pharmacy/pendingMedicineRecord">
        <div className="bg-blue-100  w-[290px]  h-[180px] mt-2 ml-2 flex ">
          <img
            className="w-50 h-20 mt-[40px]"
            src="../images/patient.png"
          ></img>
          <div className=" innline-block">
            <h1 className=" mt-[40px] ml-10">pending medicine </h1>
            <h1 className="  ml-10 text-green-500 text-2xl">
              {pendingMedicineCounter}
            </h1>
            <h1 className="  ml-10"> </h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PendingMedicine;
