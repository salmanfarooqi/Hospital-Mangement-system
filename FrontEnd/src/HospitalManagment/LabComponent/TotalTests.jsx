import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const TotalTests = () => {
  const [testnumber, settestnumber] = useState([]);
  let totalTestCounter = 0;
  const [totalTestNumber, settotalTestNumber] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const gettestData = (await axios.get("http://localhost:5000")).data
        .getTestData;
      console.log("getdata", gettestData);

      settotalTestNumber(gettestData);
      console.log("data is ", totalTestNumber);

      // const output=getTestData
    };
    fetchdata();
    console.log("test data", totalTestNumber);
  }, []);
  let totalTestNumberNumber = () => {
    totalTestNumber.map((item) => {
      if (item.status === "completed") {
        totalTestCounter = totalTestCounter + 1;
        console.log("pending done");
      }
    });
  };
  totalTestNumberNumber();

  return (
    <Link to="/lab/TotalTestRecords">
      <div>
        <div className="bg-blue-100  w-[290px]  h-[180px] mt-2 flex cursor-pointer">
          <img
            className="w-50 h-20 mt-[40px]"
            src="../images/patient.png"
          ></img>
          <div className=" innline-block">
            <h1 className=" mt-[40px] ml-10">total test </h1>
            <h1 className="  ml-10 text-green-500 text-2xl">
              {totalTestCounter}
            </h1>
            <h1 className="  ml-10">till date </h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TotalTests;
