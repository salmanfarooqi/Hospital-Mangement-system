import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";

const PendingMedicalWardRecord = () => {
  let count = 1;
  // const [tabledata,settabledata]=useState(TotalMedicine)
  const [inputdata, setinputdata] = useState("");
  const [testdata, settestdata] = useState([]);
  const [data, setdata] = useState("");
  useEffect(() => {
    const fetchdata = async () => {
      const gettestData = (await axios.get("http://localhost:5000")).data
        .getMedicalWardData;
      console.log("try", gettestData);

      settestdata(gettestData);

      // const output=getTestData
    };
    fetchdata();
    // console.log("test data", testdata);
  }, []);
  const changestatus = (_id) => {
    const status = "completed";
    axios.put("http://localhost:5000/PendingMedicalWardRecord", {
      _id,
      status,
    });
    console.log("id is", _id);
    testdata.map((item) => {
      console.log("emeregacny map", item.emergencyMedicineName);
    });
  };
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
                <th className="  pl-[100px] ">Names</th>
                <th className=" pl-[100px]"> father Name</th>
                <th className=" pl-[120px]">medicineName</th>
                <th className=" pl-[120px]">medicineQuantity</th>

                {/* <th className=" pl-[100px]"> date</th>
                <th className="pl-[100px]"> action</th> */}
              </tr>
            </thead>

            <tbody>
              {testdata.map((item) =>
                item.status === "pending" ? (
                  <tr
                    className="pt-4  w-auto hover:bg-green-100 flex"
                    key={item.id}
                  >
                    <td className="pl-[10px]">{count++}</td>
                    <td className="ml-[100px]    ">{item.patientName}</td>
                    <td className=" ml-[100px]   ">{item.patientFName}</td>
                    <td className=" ml-[100px]   ">
                      {item.emergencyMedicineName}
                    </td>
                    {/* <td className="ml-[200px] ">{item.date}</td> */}
                    {console.log("emerg", item.emergencyMedicineName)}
                    <td className="pl-[100px] ">
                      <button
                        onClick={() => {
                          changestatus(item._id);
                        }}
                      >
                        done
                      </button>
                    </td>
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

export default PendingMedicalWardRecord;
