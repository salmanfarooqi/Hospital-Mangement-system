import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../sidebars/Sidebar";
import { TotalMedicine } from "../Dashboardcontent/DashboardData";
import { useState } from "react";

const TotalTestTodayRecord = () => {
  const [tabledata, settabledata] = useState(TotalMedicine);
  const [inputdata, setinputdata] = useState("");
  return (
    <>
      <div className="relative top-[10px] ">
        <div className="ml-[800px]">
          <input
            type="text"
            placeholder="enter patient Name"
            className="bg-green-100
        px-4 py-1 ml-2 shadow-md border-none rounded-lg border-green-100"
            onChange={(e) => setinputdata(e.target.value)}
          ></input>
          {/* <button className='bg-green-500 px-2 py-1 ' onClick={Testfun}>search</button>  */}
        </div>
        <div className=" shadow-md mt-[20px] ">
          <table className="w-[1100px]  border-2 ">
            <thead className="bg-gray-100  flex ">
              <tr className="py-4">
                <th className="  pl-[10px]">iD</th>
                <th className="  pl-[100px] ">Name</th>
                <th className=" pl-[100px]"> father Name</th>
                <th className=" pl-[100px]"> disease</th>
                <th className=" pl-[100px]"> department</th>
                <th className=" pl-[100px]"> date</th>
              </tr>
            </thead>

            <tbody>
              {TotalMedicine.filter((item) =>
                item.Name.toLowerCase().includes(inputdata.toLowerCase())
              )
              .map((item) => (
                <tr
                  className="pt-4  w-auto hover:bg-green-100 flex"
                  key={item.id}
                >
                  <td className="pl-[10px]">{item.id}</td>
                  <td className="pl-[50px]  w-[200px]  ">{item.Name}</td>
                  <td className=" pl-[50px]  w-[200px]">{item.fName}</td>
                  <td className="pl-[50px]  w-[180px]">{item.disease}</td>
                  <td className="pl-[50px]  w-[180px]">{item.department}</td>
                  <td className="pl-[50px] w-[200px]">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TotalTestTodayRecord;
