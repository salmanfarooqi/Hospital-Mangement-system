import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";

const SoldMedicineRecords = () => {
  let count = 1;
  // const [tabledata,settabledata]=useState(SoldMedicine)
  const [inputdata, setinputdata] = useState("");
  const [testdata, settestdata] = useState([]);
  const [data, setdata] = useState("");
  useEffect(() => {
    const fetchdata = async () => {
      const gettestData = (await axios.get("http://localhost:5000")).data
        .getDoctorSendingMedicine;
      console.log("data of pharmacy", gettestData);

      settestdata(gettestData);

      // const output=getTestData
    };
    fetchdata();
    console.log("test data", testdata);
  }, []);

  testdata.map((item) => {
    let testvar = new Date(item.date);
    console.log("day", testvar.getDay());
    console.log("month ", testvar.getMonth());
    console.log("year ", testvar.getFullYear());
  });
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
                <th className=" pl-[120px]">medicineName</th>
                <th className=" pl-[120px]">medicineQuantity</th>
                <th className=" pl-[120px]">Date</th>

                {/* <th className=" pl-[100px]"> date</th>
                <th className="pl-[100px]"> action</th> */}
              </tr>
            </thead>

            <tbody>
              {testdata.map((item) =>
                item.status === "completed" ? (
                  <tr
                    className="pt-4  w-[12~00px] hover:bg-green-100 flex"
                    key={item.id}
                  >
                    <td className="pl-[10px]">{count++}</td>
                    <td className="pl-[100px]  w-[200px]   ">
                      {item.patientName}
                    </td>

                    <td className=" pl-[100px]  w-[200px]  ">
                      {item.patientFatherName}
                    </td>
                    <td className="pl-[100px] w-[100px] ">
                      {item.medicineName}
                    </td>
                    <td className="pl-[250px] w-[80px]  ">
                      {item.medicineQuantity}
                    </td>
                    <td className="pl-[200px] w-3200px]  ">{item.date}</td>
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

export default SoldMedicineRecords;
