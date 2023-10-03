import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const PendingTest = () => {
  let pendingTestCounter = 0;
  const [pendingTest, setpendingTest] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const gettestData = (await axios.get("http://localhost:5000")).data
        .getTestData;
      console.log("getdata", gettestData);

      setpendingTest(gettestData);
      console.log("data is ", pendingTest);

      // const output=getTestData
    };
    fetchdata();
    console.log("test data", pendingTest);
  }, []);
  let pendingTestNumber = () => {
    pendingTest.map((item) => {
      if (item.status === "pending") {
        pendingTestCounter = pendingTestCounter + 1;
        console.log("pending done");
      }
    });
  };
  pendingTestNumber();
  return (
    <div>
      <Link to="/lab/pendingTestRecord">
        <div className="bg-blue-100  w-[290px]  h-[180px] mt-2 ml-2 flex ">
          <img
            className="w-50 h-20 mt-[40px]"
            src="../images/patient.png"
          ></img>
          <div className=" innline-block">
            <h1 className=" mt-[40px] ml-10">pending Test </h1>
            <h1 className="  ml-10 text-green-500 text-2xl">
              {pendingTestCounter}
            </h1>
            <h1 className="  ml-10"> </h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PendingTest;
