import React from "react";
import { ExpiredData } from "./ExpiredData";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const OutStock = () => {
  let medicineCount = 0;
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
  return (
    <div className="bg-blue-400 h-auto mt-4 ml-6">
      <h1 className="text-center mt-6">out of stook medicine</h1>
      <div>
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="px-4 py-3 bg-blue-400 text-white font-semibold">
                S.No
              </th>
              <th className="px-4 py-3 bg-blue-400 text-white font-semibold">
                Medicine Name
              </th>
              <th className="px-4 py-3 bg-blue-400 text-white font-semibold">
                Expired Date
              </th>
              <th className="px-4 py-3 bg-blue-400 text-white font-semibold">
                Quantity
              </th>
            </tr>
          </thead>
          <tbody>
            {medicineData.map((item) =>
              item.medicineQuantity < 10 ? (
                <tr key={item._id} className="border-b">
                  <td className="px-4 py-3">{++medicineCount}</td>
                  <td className="px-4 py-3">{item.medicineName}</td>
                  <td className="px-4 py-3">{item.Expiremedicine}</td>
                  <td className="px-4 py-3">{item.medicineQuantity}</td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OutStock;
