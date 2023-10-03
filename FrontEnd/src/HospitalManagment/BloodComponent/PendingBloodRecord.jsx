import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";

const PendingBloodRecord = () => {
  let count = 0;
  // const [tabledata,settabledata]=useState(TotalMedicine)
  const [inputdata, setinputdata] = useState("");
  const [Blooddata, setBlooddata] = useState([]);
  const [data, setdata] = useState("");
  useEffect(() => {
    const fetchdata = async () => {
      const getBloodData = (
        await axios.get("http://localhost:5000/getBloodData")
      ).data;
      console.log("data", getBloodData);

      setBlooddata(getBloodData);

      // const output=getBloodData
    };
    fetchdata();
    console.log("Blood data", Blooddata);
  }, []);

  const changestatus = (_id) => {
    const status = "completed";
    axios.put("http://localhost:5000/getBloodData", {
      _id,
      status,
    });

    console.log("id is", _id);
  };
  return (
    <div>
      <div className="relative top-[10px] left-[10px]">
        <div className="ml-[800px]">
          <input
            type="text"
            placeholder="enter patient Name"
            className="bg-green-100
        px-4 py-1 ml-2 shadow-md border-none rounded-lg border-green-100"
            onChange={(e) => setdata(e.target.value)}
          ></input>
        </div>
        <div className=" shadow-md mt-[20px] ml-[0px] ">
          <table className="w-[1100px]  border-2 ">
            <thead className="bg-gray-100  flex ">
              <tr className="py-4">
                <th className="  pl-[10px]">S.No</th>
                <th className="  pl-[100px] ">Name</th>
                <th className=" pl-[100px]"> father Name</th>
                <th className=" pl-[120px]">Blood Group</th>
                <th className=" pl-[120px]">Blood Qunatity</th>
                <th className=" pl-[120px]">Blood Date</th>
                <th className=" pl-[120px]">Actions</th>

                {/* <th className=" pl-[100px]"> date</th>
                <th className="pl-[100px]"> action</th> */}
              </tr>
            </thead>

            <tbody>
              {Blooddata.map((item) =>
                item.status === "pending" ? (
                  <tr
                    className="pt-4  w-auto hover:bg-green-100 flex"
                    key={item.id}
                  >
                    <td className="pl-[10px]">{++count}</td>
                    <td className=" pl-[100px] w-[200px]  ">
                      {item.patientName}
                    </td>

                    <td className=" pl-[100px] w-[200px]  ">
                      {item.patientFName}
                    </td>

                    <td className="pl-[100px] w-[200px] ">{item.bloodGroup}</td>
                    <td className="pl-[100px]  w-[200px]">
                      {item.bloodQuantity}
                    </td>
                    <td className="pl-[100px] w-[200px]">{item.date}</td>
                    <td className="pl-[50px] w-[200px]">
                      <button
                        onClick={() => {
                          changestatus(item._id);
                        }}
                      >
                        done
                      </button>
                    </td>
                  </tr>
                ) : null
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PendingBloodRecord;
