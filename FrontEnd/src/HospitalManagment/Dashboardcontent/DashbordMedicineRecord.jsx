import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../sidebars/Sidebar";
import { TotalMedicine } from "./DashboardData";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const DashbordMedicineRecord = () => {
  const x = new Date();
  const dates = x.getDate();
  const year = x.getFullYear();
  const month = x.getMonth();
  const date = `${dates}- ${month}- ${year}`;
  const [medicineRecorddata, setmedicineRecorddata] = useState([]);
  const [Data, setData] = useState("");

  let getData;
  let datas;
  let count = 1;
  useEffect(() => {
    const fetchdata = async () => {
      const getData = (await axios.get("http://localhost:5000")).data
        .getMedicineData;
      // console.log(getData)
      //  const medicine = getData.map(medicine => medicine.medicineName)
      //  console.log(medicine)
      setmedicineRecorddata(getData);
      //  datas=getData.getData

      // const name=getData.data.map(val=>val.medicineName)
      // console.log("data",name)
      // const medicineData = getData;
      // console.log("out medicine data" + medicineData)
    };
    fetchdata();
  }, []);

  // const [Data,setdata]=useState('');

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
            placeholder="enter Medicine Name"
            className="bg-green-100
        px-4 py-1 ml-2 shadow-md border-none rounded-lg border-green-100"
            onChange={(e) => setData(e.target.value)}
          ></input>
          {/* <button className='bg-green-500 px-2 py-1 ' onClick={Testfun}>search</button>  */}
        </div>
        <div className=" shadow-md mt-[20px] ">
          <table className="w-[1100px]  border-2 ">
            <thead className="bg-gray-100  flex ">
              <tr className="py-4">
                <th className="  pl-[10px]">S.No</th>
                <th className="  pl-[100px] ">medicineName</th>
                <th className=" pl-[100px]"> Medicinequantity</th>
                <th className=" pl-[100px]"> issue Date</th>
                <th className=" pl-[100px]"> expired Date</th>

                {/* <th className="pl-[100px]"> action</th> */}
              </tr>
            </thead>

            <tbody>
              {medicineRecorddata
                .filter((item) =>
                  item.medicineName.toLowerCase().includes(Data.toLowerCase())
                )

                .map((item, key) =>
                  item.date == date ? (
                    <tr className="pt-4  w-auto hover:bg-green-100 flex">
                      <td className="pl-[10px]">{count++}</td>
                      <td className="pl-[120px] ">{item.medicineName}</td>
                      <td className=" pl-[185px] ">{item.medicineQuantity}</td>
                      <td className="pl-[180px] ">{item.issuemedicine}</td>
                      <td className="pl-[100px] ">{item.Expiremedicine}</td>
                    </tr>
                  ) : null
                )}
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

export default DashbordMedicineRecord;
