import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../sidebars/Sidebar";
import { TotalMedicine } from "../Dashboardcontent/DashboardData";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const AttendenceReportRecord = (props) => {
  props.data("none");
  let presentDoctorCounter = 0;
  let AbsentDoctorCounter = 0;
  let LeavesDoctorCounter = 0;
  let presentNurseCounter = 0;
  let AbsentNurseCounter = 0;
  let LeaveNurseCounter = 0;
  let todaydate = new Date();
  const Day = todaydate.getDate();
  const month = todaydate.getMonth();
  const year = todaydate.getFullYear();
  const dateData = `${Day}-${month}-${year}`;
  const [tabledata, settabledata] = useState(TotalMedicine);
  const [inputdata, setinputdata] = useState("");
  const [LeaveDoctor, setLeaveDoctor] = useState([]);
  const [dateInput, setdateInput] = useState("");

  let myset = new Set();

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
  LeaveDoctor.map((item) => {
    myset.add(item.date);
  });
  let myarray = [...myset];
  console.log("arr", myarray);
  LeaveDoctor.map((item) => {
    if (
      item.employ == "Doctor" &&
      item.attendence == "Absent" &&
      item.date == dateData
    ) {
      presentDoctorCounter = presentDoctorCounter + 1;
      console.log("present record", presentDoctorCounter);
      console.log("td", todaydate);
    }

    if (
      item.employ == "Doctor" &&
      item.attendence == "Leave" &&
      item.date == dateData
    ) {
      LeavesDoctorCounter = LeavesDoctorCounter + 1;
      console.log("Leaves record", LeavesDoctorCounter);
      console.log("td", todaydate);
    }
    if (
      item.employ == "Nurse" &&
      item.attendence == "present" &&
      item.date == dateData
    ) {
      presentNurseCounter = presentNurseCounter + 1;
      console.log("Leaves record", LeavesDoctorCounter);
      console.log("td", todaydate);
    }
    if (
      item.employ == "Nurse" &&
      item.attendence == "Absent" &&
      item.date == dateData
    ) {
      AbsentNurseCounter = AbsentNurseCounter + 1;
      console.log("Leaves record", LeavesDoctorCounter);
      console.log("td", todaydate);
    }
    if (
      item.employ == "Nurse" &&
      item.attendence == "Leave" &&
      item.date == dateData
    ) {
      LeaveNurseCounter = LeaveNurseCounter + 1;
      console.log("Leaves record", LeavesDoctorCounter);
      console.log("td", todaydate);
    }
    //   else if (
    //     item.employ == "Doctor" &&
    //     item.attendence == "Leave" &&
    //     item.date == dateData
    //   ) {
    //    AbsentDoctorCounter =AbsentDoctorCounter + 1;
    //     console.log("present record", AbsentDoctorCounter);
    //     console.log("td", todaydate);
    //   }
  });

  return (
    <>
      <div className=" shadow-md mt-[20px] ">
        <table className="w-[1200px]  border-2  h-[40px] custom-scrollbar">
          <thead className="bg-gray-100  flex ">
            <tr className="py-4">
              <th className="  pl-[10px]">Absent Doctor</th>
              <th className="  pl-[50px] ">present Doctor</th>
              <th className=" pl-[50px]"> Leave Doctor</th>
              <th className="  pl-[50px]">Absent Nurse</th>
              <th className="  pl-[50px] ">present Nurse</th>
              <th className=" pl-[50px]"> Leave Nurse</th>
              {/* <th className=" pl-[100px]"> Type</th>
                <th className=" pl-[140px]"> Report</th>
                <th className=" pl-[180px]"> date</th> */}
            </tr>
          </thead>

          <tbody>
            {/* {LeaveDoctor.map((item) => ( */}
            {/* //     item.Name.toLowerCase().includes(inputdata.toLowerCase())
                //   )
                //     .filter((item) => item.date.includes(dateInput))

             
                {/* <td className="pl-[10px]">{++LeaveDoctorCounter}</td> */}

            {/* {myarray.map((item) => ( */}
            <tr className="pt-4  w-auto hover:bg-green-100 flex">
              <td className="pl-[10px]  w-[100px]  ">{AbsentDoctorCounter}</td>
              <td className="pl-[100px]  w-[100px]  ">
                {presentDoctorCounter}
              </td>

              <td className="pl-[150px]  w-[100px]  ">{LeavesDoctorCounter}</td>

              <td className="pl-[150px]  w-[100px]  ">{AbsentNurseCounter}</td>
              <td className="pl-[150px]  w-[100px]  ">{presentNurseCounter}</td>

              <td className="pl-[150px]  w-[100px]  ">{LeaveNurseCounter}</td>
              {/* <td className="pl-[100px]  w-[200px]  ">{item}</td> */}
              {/* <td className="pl-[100px]  w-[200px]  ">{item.fName}</td>
                  <td className="pl-[50px] w-[200px]">{item.employ}</td>
                  <td className=" pl-[50px]  w-[200px]">{item.attendence}</td>

                  <td className="pl-[50px] w-[200px]">{item.date}</td> */}
            </tr>
            {/* ))} */}
            {console.log("inout date", inputdata)}
          </tbody>
        </table>
      </div>
      {/* </div> */}
    </>
  );
};

export default AttendenceReportRecord;
