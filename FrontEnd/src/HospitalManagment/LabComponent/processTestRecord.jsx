import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";

const ProcessTestRecord = () => {
  let count = 1;
  let name = "ahmad";
  // const [tabledata,settabledata]=useState(TotalMedicine)
  const [inputdata, setinputdata] = useState("");
  const [testdata, settestdata] = useState([]);
  const [data, setdata] = useState("");
  const [uploadImage, setuploadImage] = useState("");
  useEffect(() => {
    const fetchdata = async () => {
      const gettestData = (await axios.get("http://localhost:5000")).data
        .getTestData;
      console.log("data", gettestData);

      settestdata(gettestData);

      // const output=getTestData
    };
    fetchdata();
    console.log("test data", testdata);
  }, []);

  const changestatus = (_id) => {
    const status = "completed";

    axios.put("http://localhost:5000/processTestRecord", {
      _id,
      status,
    });
    console.log("id is", _id);
  };
  let convertTobase64 = async (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setuploadImage(reader.result);
      console.log("image data", uploadImage);
    };
    // toString(image);
    console.log("setimage", uploadImage);
    await axios.post("http://localhost:5000/processTestRecord", {
      uploadImage: uploadImage,
    });
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
                <th className=" pl-[120px]">Test Type</th>
                <th className=" pl-[120px]">Test Detail</th>
                <th className=" pl-[120px]">Test Date</th>
                <th className=" pl-[120px]">status</th>

                {/* <th className=" pl-[100px]"> date</th>
                <th className="pl-[100px]"> action</th> */}
              </tr>
            </thead>

            <tbody>
              {testdata.map((item) =>
                item.status === "process" ? (
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

                    <td className="pl-[100px] w-[200px] ">{item.testtype}</td>
                    <td className="pl-[100px]  w-[200px]">{item.testDetail}</td>
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
      {console.log("Wawo", uploadImage)}
    </div>
  );
};

export default ProcessTestRecord;
