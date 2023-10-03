import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";

const TotalUltrasoundRecord = () => {
  let count = 1;
  // const [tabledata,settabledata]=useState(TotalMedicine)
  const [inputdata, setinputdata] = useState("");
  const [testdata, settestdata] = useState([]);
  const [data, setdata] = useState("");
  useEffect(() => {
    const fetchdata = async () => {
      const gettestData = (await axios.get("http://localhost:5000")).data
        .getTestData;
      console.log("data", gettestData);

      settestdata(gettestData);

      // const output=getTestData
    };
    fetchdata();
    console.log("test data", testdata);
  }, []);

  return (
    <div>
      <div className="relative top-[10px] left-[10px]">
        <div className="ml-[800px]">
          <input
            type="text"
            placeholder="enter patient Name"
            className="bg-green-100
        px-4 py-1 ml-2 shadow-md border-none rounded-lg border-green-100"
            onChange={(e) => setdata(e.target.value)}
          ></input>
        </div>
        <div className=" shadow-md mt-[20px] ml-[0px] ">
          <table className="w-[1100px]  border-2 ">
            <thead className="bg-gray-100  flex ">
              <tr className="py-4">
                <th className="  pl-[10px]">S.No</th>
                <th className="  pl-[100px] ">Name</th>
                <th className=" pl-[100px]"> father Name</th>
                <th className=" pl-[120px]">Test Type</th>
                <th className=" pl-[120px]">Test Detail</th>
                <th className=" pl-[120px]">Test Date</th>

                {/* <th className=" pl-[100px]"> date</th>
                <th className="pl-[100px]"> action</th> */}
              </tr>
            </thead>

            <tbody>
              {testdata
                .filter((item) =>
                  item.patientName.toLowerCase().includes(data.toLowerCase())
                )
                .map((item) =>
                  item.status === "completed" &&
                  item.testtype == "ultrasound" ? (
                    <tr
                      className="pt-4  w-auto hover:bg-green-100 flex"
                      key={item.id}
                    >
                      <td className="pl-[10px]">{count++}</td>
                      <td className="pl-[100px]  w-[150px]  ">
                        {item.patientName}
                      </td>
                      <td className=" pl-[130px] w-[200px]  ">
                        {item.patientFName}
                      </td>

                      <td className="pl-[100px]  w-[200px]">{item.testtype}</td>
                      <td className="pl-[100px] w-[200px] ">
                        {item.testDetail}
                      </td>
                      <td className="pl-[100px] w-[200px]">{item.date}</td>
                    </tr>
                  ) : null
                )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TotalUltrasoundRecord;
