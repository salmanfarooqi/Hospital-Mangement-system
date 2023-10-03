import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const TotalXray = () => {
  let totals = 0;
  const [totalultrasound, settotalultrasound] = useState([]);
  //   const [totals, settotals] = useState(1);
  useEffect(() => {
    const fetchdata = async () => {
      const getultrasound = (await axios.get("http://localhost:5000")).data
        .getTestData;
      console.log(getultrasound);

      settotalultrasound(getultrasound);
    };
    fetchdata();
  }, []);
  return (
    <>
      {totalultrasound.map((item) => {
        if (item.testtype == "x rays" && item.status == "completed") {
          //   settotals(totals++);
          totals = totals + 1;

          console.log(totals);
        }
        // console.log(item.testtype);
      })}
      {console.log("totals", totals)}
      <Link to="/admin/TotalXrayRecord">
        <div>
          <div className="bg-blue-100 ml-2 w-[290px]  h-[180px] mt-2 flex  cursor-pointer">
            <img
              className="w-50 h-20 mt-[40px]"
              src="../images/patient.png"
            ></img>
            <div className=" innline-block">
              <h1 className=" mt-[40px] ml-10">total xrays </h1>
              <h1 className="  ml-10 text-green-500 text-2xl">{totals}</h1>
              {/* <h1 className="  ml-10">1 march 2023 </h1> */}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default TotalXray;
