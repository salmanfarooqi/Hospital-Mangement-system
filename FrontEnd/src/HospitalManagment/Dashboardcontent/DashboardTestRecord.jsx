import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const DashboardTestRecord = () => {
  const [inputdata, setInputData] = useState("");
  const [testdata, setTestData] = useState([]);
  const x = new Date();
  const dates = x.getDate();
  const year = x.getFullYear();
  const month = x.getMonth();
  const date = `${month}- ${dates}- ${year}`;
  let count = 0;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000");
        const testData = response.data.getTestData;
        setTestData(testData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    // <div className="container mx-auto mt-10">
    <div className="relative top-[10px] left-[10px] ">
      <div className="flex justify-center mb-4 ml-[250px]">
        <input
          type="text"
          placeholder="Enter patient name"
          className="w-64 py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          onChange={(e) => setInputData(e.target.value)}
        />
      </div>
      <div className="shadow-md">
        <table className="w-[1000px] ">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Father Name</th>
              <th className="px-4 py-2">Test Type</th>
              <th className="px-4 py-2">Test Detail</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {testdata
              .filter((item) =>
                item.patientName.toLowerCase().includes(inputdata.toLowerCase())
              )
              .map((item, index) =>
                item.date === date ? (
                  <tr className="bg-white hover:bg-green-100" key={item.id}>
                    <td className="px-4 py-2">{++count}</td>
                    <td className="px-10 py-2">{item.patientName}</td>
                    <td className="px-6 py-2">{item.patientFName}</td>
                    <td className="px-6 py-2">{item.testtype}</td>
                    <td className="px-6 py-2">{item.testDetail}</td>
                    <td className="px-6 py-2">{item.date}</td>
                  </tr>
                ) : null
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardTestRecord;
