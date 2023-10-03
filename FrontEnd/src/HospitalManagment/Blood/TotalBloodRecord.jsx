import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../sidebars/Sidebar";
import { TotalMedicine } from "../Dashboardcontent/DashboardData";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const TotalBloodRecord = () => {
  let counter = 0;
  const [totalBlood, settotalBlood] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const bloodData = (await axios.get("http://localhost:5000/")).data
        .getBloodData;
      console.log(bloodData);
      //   console.log(typeof bloodData.bloodQuantity);
      settotalBlood(bloodData);
    };
    fetchdata();
  }, []);

  const [Data, setdata] = useState("");

  //     function Testfun(){

  //        const testdata=tabledata.filter((item)=>
  //        item.Name.toLowerCase().includes(Data.toLowerCase()))
  //        settabledata(testdata)

  // }

  return (
    <div>
      <div className="relative top-[10px]">
        <div className="ml-[800px]">
          <input
            type="text"
            placeholder="enter blood group Name"
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
                <th className="  pl-[10px]">S.No</th>
                <th className="  pl-[180px] ">blood Group</th>
                <th className=" pl-[190px]"> blood Quantity</th>
                <th className=" pl-[200px]"> date</th>
              </tr>
            </thead>

            <tbody>
              {totalBlood
                .filter((item) =>
                  item.bloodGroup.toLowerCase().includes(Data.toLowerCase())
                )

                .map((item, key) => (
                  <tr
                    className="pt-4  w-auto hover:bg-green-100 flex"
                    key={item.id}
                  >
                    <td className="pl-[10px]">{++counter}</td>
                    <td className="pl-[190px]">{item.bloodGroup}</td>
                    <td className=" pl-[250px]  w-[200px]">
                      {item.bloodQuantity}
                    </td>
                    <td className=" pl-[300px]  w-[500px]">{item.date}</td>
                    {/* <td className="pl-[50px]  w-[180px]">{item.disease}</td>
                    <td className="pl-[50px]  w-[180px]">{item.department}</td>
                    <td className="pl-[50px] w-[200px]">{item.date}</td> */}
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

export default TotalBloodRecord;
