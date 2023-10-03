import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../sidebars/Sidebar";
import { TotalMedicine } from "./DashboardData";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const DashbordNurseRecord = () => {
  let nurseCounter = 0;
  const [NurseData, setNurseData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const getNursedata = (await axios.get("http://localhost:5000/")).data
        .getNurseData;
      console.log(getNursedata);
      setNurseData(getNursedata);
    };

    fetchdata();
  }, []);

  const [Data, setdata] = useState("");
  const [tabledata, settabledata] = useState(TotalMedicine);

  //     function Testfun(){

  //        const testdata=tabledata.filter((item)=>
  //        item.Name.toLowerCase().includes(Data.toLowerCase()))
  //        settabledata(testdata)

  // }

  return (
    <div>
      <div className="relative top-[10px] ">
        <div className="ml-[800px]">
          <input
            type="text"
            placeholder="enter Nurse Name"
            className="bg-green-100
        px-4 py-1 ml-2 shadow-md border-none rounded-lg border-green-100"
            onChange={(e) => setdata(e.target.value)}
          ></input>
          {/* <button className='bg-green-500 px-2 py-1 ' onClick={Testfun}>search</button>  */}
        </div>
        <div className=" shadow-md mt-[20px] ">
          <table className="w-[1100px]  border-2 ">
            <thead className="bg-gray-100  flex ">
              <tr className="py-4">
                <th className="  pl-[10px]">iD</th>
                <th className="  pl-[120px] ">Name</th>
                <th className=" pl-[150px]"> father Name</th>
                <th className=" pl-[150px]"> gender</th>
                <th className=" pl-[150px]"> age</th>
              </tr>
            </thead>

            <tbody>
              {NurseData.filter((item) =>
                item.Name.toLowerCase().includes(Data.toLowerCase())
              ).map((item, key) => (
                <tr
                  className="pt-4  w-auto hover:bg-green-100 flex"
                  key={item.id}
                >
                  <td className="pl-[10px]">{++nurseCounter}</td>
                  <td className="pl-[120px]  w-[200px]  ">{item.Name}</td>
                  <td className=" pl-[150px]  w-[200px]">{item.fatherName}</td>
                  <td className="pl-[150px]  w-[180px]">{item.gender}</td>
                  {/* <td className="pl-[50px]  w-[180px]">{item.age}</td> */}

                  <td className="pl-[200px] w-[200px]">{item.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashbordNurseRecord;
