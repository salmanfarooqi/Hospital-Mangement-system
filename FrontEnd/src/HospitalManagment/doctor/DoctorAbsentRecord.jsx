import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../sidebars/Sidebar";
import { TotalMedicine } from "../Dashboardcontent/DashboardData";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const DoctorAbsentRecord = () => {
  let todaydate = new Date();
  const Day = todaydate.getDate();
  const month = todaydate.getMonth();
  const year = todaydate.getFullYear();
  const dateData = `${Day}-${month}-${year}`;
  const [tabledata, settabledata] = useState(TotalMedicine);
  const [inputdata, setinputdata] = useState("");
  const [LeaveDoctor, setLeaveDoctor] = useState([]);
  let LeaveDoctorCounter = 0;

  useEffect(() => {
    const fetchdata = async () => {
      const attendencedata = (await axios.get("http://localhost:5000/")).data
        .getAttendenceData;
      console.log("attendence", attendencedata);
      console.log("hay");
      setLeaveDoctor(attendencedata);
    };
    fetchdata();
  }, []);

  return (
    <>
      <div className="relative top-[10px] ">
        <div className="ml-[800px]">
          <input
            type="text"
            placeholder="enter Doctor Name"
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
                <th className=" pl-[100px]"> Type</th>
                <th className=" pl-[140px]"> Report</th>
                <th className=" pl-[180px]"> date</th>
              </tr>
            </thead>

            <tbody>
              {LeaveDoctor.filter((item) =>
                item.Name.toLowerCase().includes(inputdata.toLowerCase())
              ).map((item) =>
                item.employ == "Doctor" &&
                item.attendences == "Absent" &&
                dateData == item.date ? (
                  <tr
                    className="pt-4  w-auto hover:bg-green-100 flex"
                    key={item.id}
                  >
                    <td className="pl-[10px]">{++LeaveDoctorCounter}</td>

                    <td className="pl-[100px]  w-[200px]  ">{item.Name}</td>

                    <td className="pl-[100px]  w-[200px]  ">{item.fName}</td>
                    <td className="pl-[50px] w-[200px]">{item.employ}</td>
                    <td className=" pl-[50px]  w-[200px]">{item.attendence}</td>

                    <td className="pl-[50px] w-[200px]">{item.date}</td>
                  </tr>
                ) : null
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DoctorAbsentRecord;
