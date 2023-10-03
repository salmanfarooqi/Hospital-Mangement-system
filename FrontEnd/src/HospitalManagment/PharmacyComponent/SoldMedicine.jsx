import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const SoldMedicine = () => {
  let SoldMedicineCounter = 0;
  const [SoldMedicineData, setSoldMedicine] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const getMedicineData = (await axios.get("http://localhost:5000")).data
        .getDoctorSendingMedicine;
      console.log("getdata", getMedicineData);

      setSoldMedicine(getMedicineData);
      console.log("data is ", SoldMedicineData);

      // const output=getMedicineData
    };
    fetchdata();
    console.log("Medicine data", SoldMedicineData);
  }, []);
  let SoldMedicineNumber = () => {
    SoldMedicineData.map((item) => {
      if (item.status === "completed") {
        SoldMedicineCounter = SoldMedicineCounter + 1;
        console.log("pending done");
      }
    });
  };
  SoldMedicineNumber();
  return (
    <div>
      <Link to="/pharmacy/soldMedicineRecord">
        <div className="bg-blue-100  w-[290px]  h-[180px] mt-2 ml-2 flex ">
          <img
            className="w-50 h-20 mt-[40px]"
            src="../images/patient.png"
          ></img>
          <div className=" innline-block">
            <h1 className=" mt-[40px] ml-10">Sold medicine </h1>
            <h1 className="  ml-10 text-green-500 text-2xl">
              {SoldMedicineCounter}
            </h1>
            <h1 className="  ml-10"> </h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SoldMedicine;
