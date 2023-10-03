import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../sidebars/Sidebar";

import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const NurseTotalRecord = () => {
  let getNursedata;
  const [inputdata, setinputdata] = useState("");
  let counts = 1;
  // let getNursedata;

  const [Data, setdata] = useState("");

  const [nursedata, setnursedata] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const getnursedata = (await axios.get("http://localhost:5000/")).data
        .getNurseData;
      console.log("data", getnursedata);
      setnursedata(getnursedata);
    };

    fetchdata();

    console.log("pat", nursedata);
  }, []);
  return (
    <>
      <div className="relative bottom-[710px] left-[190px]">
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
                <th className=" pl-[100px]">age</th>
                {/* <th className=" pl-[100px]"> gender</th> */}
                {/* <th className=" pl-[100px]"> date</th> */}
              </tr>
            </thead>

            <tbody>
              {
                // .filter((item)=>(

                //     item.Name.toLowerCase().includes(inputdata.toLowerCase())
                // ))

                nursedata.map((item) => (
                  <tr className="pt-4  w-auto hover:bg-green-100 flex">
                    <td className="pl-[10px]">{counts++}</td>
                    <td className="pl-[100px]   ">{item.Name}</td>
                    <td className="pl-[120px]  ">{item.fatherName}</td>
                    <td className=" pl-[150px]  ">{item.age}</td>

                    <td className="pl-[100px] ">{item.gender}</td>
                    {/* <td className="pl-[50px] ">{item.qualification}</td> */}
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default NurseTotalRecord;
