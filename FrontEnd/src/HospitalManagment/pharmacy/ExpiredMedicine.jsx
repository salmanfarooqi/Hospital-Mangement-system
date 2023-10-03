import React, { Component } from "react";
import { ExpiredData } from "./ExpiredData";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function ExpiredMedicine(props) {
  let serialNumber = 0;
  const [medicineData, setMedicineData] = useState([]);
  const [updatedData, setupdatedData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const getmedicineData = (await axios.get("http://localhost:5000/")).data
        .getMedicineData;
      setMedicineData(getmedicineData);
      console.log("data", getmedicineData);
    };
    fetchdata();
  }, []);
  const todayDate = new Date();
  const dates = todayDate.getDate();
  const year = todayDate.getFullYear();
  const month = todayDate.getMonth();
  const todaydate = `${year}-${month}-${dates}`;
  {
    console.log("todaydate", todaydate);
  }

  let changeStatus = async (_id) => {
    console.log("id is ", _id);
    let name = "salman";
    await axios.delete(`http://localhost:5000/pharmacy/${_id}`);
  };

  return (
    <div>
      <div className="bg-blue-500 h-auto mt-4 ml-2">
        <h1 className="text-center mt-2">Expired Medicine</h1>
        <div>
          <table className="w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr>
                <th className="px-4 py-3 bg-blue-500 text-white font-semibold">
                  S.No
                </th>
                <th className="px-4 py-3 bg-blue-500 text-white font-semibold">
                  Medicine Name
                </th>
                <th className="px-4 py-3 bg-blue-500 text-white font-semibold">
                  Expired Date
                </th>
                <th className="px-4 py-3 bg-blue-500 text-white font-semibold">
                  Quantity
                </th>
                <th className="px-4 py-3 bg-blue-500 text-white font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {medicineData.map((item) =>
                item.Expiremedicine < todaydate ? (
                  <tr key={item._id} className="border-b">
                    <td className="px-4 py-3">{++serialNumber}</td>
                    <td className="px-4 py-3">{item.medicineName}</td>
                    <td className="px-4 py-3">{item.Expiremedicine}</td>
                    <td className="px-4 py-3">{item.medicineQuantity}</td>
                    <td className="px-4 py-3">
                      <button
                        className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700"
                        onClick={() => changeStatus(item._id)}
                      >
                        Delete
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
}

export default ExpiredMedicine;
