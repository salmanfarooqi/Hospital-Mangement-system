import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../sidebars/Sidebar";
import { TotalMedicine } from "../Dashboardcontent/DashboardData";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const DoctorTotalRecord = () => {
  let count = 1;

  const [inputdata, setinputdata] = useState("");
  const [medicinesRecorddata, setmedicineRecorddata] = useState([]);
  const [Data, setData] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      const getsData = (await axios.get("http://localhost:5000/doctors")).data;
      console.log(getsData);
      //  const medicine = getData.map(medicine => medicine.medicineName)
      //  console.log(medicine)
      setmedicineRecorddata(getsData);

      //
    };
    fetchdata();
    console.log("data", medicinesRecorddata);
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
                <th className="  pl-[10px]">S.No</th>
                <th className="  pl-[100px] ">Name</th>
                <th className=" pl-[100px]"> father Name</th>
                <th className=" pl-[100px]">age</th>
                <th className=" pl-[100px]">gender</th>
                <th className=" pl-[150px]">phone</th>
                {/* <th className=" pl-[100px]"> specialization</th>
                <th className=" pl-[100px]"> department</th>

                <th className="pl-[100px]"> action</th> */}
              </tr>
            </thead>

            <tbody>
              {medicinesRecorddata
                .filter((item) =>
                  item.firstName.toLowerCase().includes(inputdata.toLowerCase())
                )
                .map((item) => (
                  <tr
                    className="pt-4  w-auto hover:bg-green-100 flex"
                    key={item.id}
                  >
                    <td className="pl-[10px]">{count++}</td>
                    <td className="pl-[100px]  w-[200px]  ">
                      {item.firstName + " " + item.lastName}
                    </td>
                    <td className=" pl-[80px]  w-[200px]">{item.fatherName}</td>
                    <td className="pl-[80px]  w-[180px]">{item.age}</td>
                    <td className="pl-[40px]  w-[180px]">{item.gender}</td>
                    <td className="pl-[50px]  w-[180px]">{item.phone}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DoctorTotalRecord;
