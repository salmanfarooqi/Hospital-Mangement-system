// import React from "react";
// import Navbar from "../Navbar/Navbar";
// import Sidebar from "../sidebars/Sidebar";
// import { TotalMedicine } from "../Dashboardcontent/DashboardData";
// import { useState } from "react";
// import axios from "axios";
// import { useEffect } from "react";

// const AttendenceHistoryRecord = () => {
//   let todaydate = new Date();
//   const Day = todaydate.getDate();
//   const month = todaydate.getMonth();
//   const year = todaydate.getFullYear();
//   const dateData = `${Day}-${month}-${year}`;
//   const [tabledata, settabledata] = useState(TotalMedicine);
//   const [inputdata, setinputdata] = useState("");
//   const [LeaveDoctor, setLeaveDoctor] = useState([]);
//   const [dateInput, setdateInput] = useState("");
//   let numberofRecord = 10;

//   let myset = new Set();

//   let LeaveDoctorCounter = 0;

//   useEffect(() => {
//     const fetchdata = async () => {
//       const attendencedata = (await axios.get("http://localhost:5000/")).data
//         .getAttendenceData;
//       console.log("attendence", attendencedata);
//       console.log("hay");
//       setLeaveDoctor(attendencedata);
//     };
//     fetchdata();
//   }, []);
//   LeaveDoctor.map((item) => {
//     myset.add(item.date);
//   });
//   let myarray = [...myset];
//   console.log("arr", myarray);

//   return (
//     <>
//       <div className="relative top-[10px] ">
//         <div className="flex">
//           <div className="ml-[500px]">
//             <input
//               type="text"
//               placeholder="enter Doctor Name"
//               className="bg-green-100
//         px-4 py-1 ml-2 shadow-md border-none rounded-lg border-green-100"
//               onChange={(e) => setinputdata(e.target.value)}
//             ></input>
//           </div>

//           <div className="ml-[5px]">
//             <select
//               className="drop-down"
//               value={inputdata}
//               onChange={(e) => setdateInput(e.target.value)}
//             >
//               <option>Select Date</option>

//               {myarray.map((item) => {
//                 return <option>{item}</option>;
//               })}
//             </select>
//           </div>
//         </div>

//         <div className=" shadow-md mt-[20px] ">
//           <table className="w-[1100px]  border-2  h-auto custom-scrollbar">
//             <thead className="bg-gray-100  flex ">
//               <tr className="py-4">
//                 <th className="  pl-[10px]">S.No</th>
//                 <th className="  pl-[100px] ">Name</th>
//                 <th className=" pl-[100px]"> father Name</th>
//                 <th className=" pl-[100px]"> Type</th>
//                 <th className=" pl-[140px]"> Report</th>
//                 <th className=" pl-[180px]"> date</th>
//               </tr>
//             </thead>

//             <tbody>
//               {/* {LeaveDoctor.filter((item) =>
//                 item.Name.toLowerCase().includes(inputdata.toLowerCase())
//               ) */}
//               {LeaveDoctor.filter((item) => item.date.includes(dateInput)).map(
//                 (item) => (
//                   <tr
//                     className="pt-4  w-auto hover:bg-green-100 flex"
//                     key={item.id}
//                   >
//                     <td className="pl-[10px]">{++LeaveDoctorCounter}</td>

//                     <td className="pl-[100px]  w-[200px]  ">{item.Name}</td>

//                     <td className="pl-[100px]  w-[200px]  ">{item.fName}</td>
//                     <td className="pl-[50px] w-[200px]">{item.employ}</td>
//                     <td className=" pl-[50px]  w-[200px]">{item.attendence}</td>

//                     <td className="pl-[50px] w-[200px]">{item.date}</td>
//                   </tr>
//                 )
//               )}
//               {console.log("data is ", inputdata)}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AttendenceHistoryRecord;
