import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const ProcessTest = () => {
  let processTestCounter = 0;
  const [processData, setprocessData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const gettestData = (await axios.get("http://localhost:5000")).data
        .getTestData;
      console.log("getdata", gettestData);

      setprocessData(gettestData);
      console.log("data is ");

      // const output=getTestData
    };
    fetchdata();
    console.log("test data");
  }, []);
  let processTestNumber = () => {
    processData.map((item) => {
      if (item.status === "process") {
        processTestCounter = processTestCounter + 1;
        console.log("pending done");
      }
    });
  };
  processTestNumber();
  return (
    <div>
      <Link to="/lab/processTestRecord">
        <div className="bg-blue-100  w-[290px]  h-[180px] mt-2 ml-2 flex ">
          <img
            className="w-50 h-20 mt-[40px]"
            src="../images/patient.png"
          ></img>
          <div className=" innline-block">
            <h1 className=" mt-[40px] ml-10">process Test </h1>
            <h1 className="  ml-10 text-green-500 text-2xl">
              {processTestCounter}
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProcessTest;
