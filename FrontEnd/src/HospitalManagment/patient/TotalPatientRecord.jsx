import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../sidebars/Sidebar";

import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const TotalPatientRecord = () => {
  let counts = 1;

  const [Data, setdata] = useState("");

  const [patientdata, setpatientdata] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const getpatientdata = (await axios.get("http://localhost:5000/patients"))
        .data.patient;
      // console.log("data",getpatientdata)
      setpatientdata(getpatientdata);
    };

    fetchdata();

    console.log("pat", patientdata);
  }, []);

  return (
    <div>
      <div className="relative top-[10px] ">
        <div className="ml-[800px]">
          <input
            type="text"
            placeholder="enter patient Name"
            className="bg-green-100
        px-4 py-1 ml-2 shadow-md border-none rounded-lg border-green-100"
            onChange={(e) => setdata(e.target.value)}
          ></input>
        </div>
        <div className=" shadow-md mt-[20px] ">
          <table className="w-[1100px]  border-2 ">
            <thead className="bg-gray-100  flex ">
              <tr className="py-4">
                <th className="  pl-[10px]">S.No</th>
                <th className="  pl-[200px] ">Name</th>
                <th className=" pl-[200px]"> father Name</th>

                <th className=" pl-[100px]">age</th>
                <th className=" pl-[100px]">gender</th>
              </tr>
            </thead>

            <tbody>
              {patientdata
                .filter((item) =>
                  item.firstName.toLowerCase().includes(Data.toLowerCase())
                )

                .map((item, key) => (
                  <tr className="pt-4  w-auto hover:bg-green-100 flex">
                    <td className="pl-[10px]">{counts++}</td>
                    <td className="pl-[220px]  w-[200px]  ">
                      {item.firstName + "" + item.lastName}
                    </td>
                    <td className=" pl-[250px]  w-[400px]">
                      {item.fatherName}
                    </td>

                    <td className="pl-[50px]  ">{item.age}</td>
                    <td className="pl-[100px]  w-[180px]">{item.gender}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {/* <div className='mt-[20px] ml-[1000px] flex '>
          <buttoon className=' ' onClick={button_call}><img className='w-8 h-8 cursor-pointer' src='./images/people.png' alt=" image not found"></img>  </buttoon>
           
            <buttoon className='ml-4 '><img className='w-8 h-8' src='./images/people.png' alt="image not found"></img>  </buttoon>
        </div> */}
      </div>
    </div>
  );
};

export default TotalPatientRecord;
