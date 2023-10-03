import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../sidebars/Sidebar";
import { TotalMedicine } from "../Dashboardcontent/DashboardData";
import { useState } from "react";

const RemaningBloodRecord = () => {
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
            placeholder="enter Blood Group Name"
            className="bg-green-100
        px-4 py-1 ml-2 shadow-md border-none rounded-lg border-green-100"
            onChange={(e) => setdata(e.target.value)}
          ></input>
          {/* <button className='bg-green-500 px-2 py-1 ' onClick={Testfun}>search</button>  */}
        </div>
        <div className=" shadow-md mt-[20px] ml-[150px] ">
          <table className="w-[600px]  border-2 ">
            <thead className="bg-gray-100  flex ">
              <tr className="py-4">
                <th className="  pl-[10px]">S.No</th>
                <th className="  pl-[100px] ">Blood Group</th>
                <th className=" pl-[100px]"> Blood Quantity</th>
              </tr>
            </thead>

            <tbody>
              {tabledata
                .filter((item) =>
                  item.Name.toLowerCase().includes(Data.toLowerCase())
                )

                .map((item, key) => (
                  <tr
                    className="pt-4  w-auto hover:bg-green-100 flex"
                    key={item.id}
                  >
                    <td className="pl-[10px]">{item.id}</td>
                    <td className="pl-[150px]  w-[200px]  ">{item.Name}</td>
                    <td className=" pl-[200px]  w-[200px]">{item.fName}</td>
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

export default RemaningBloodRecord;
