import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
const Testnumber = () => {
  let testCounter = 0;
  const [testnumber, settestnumber] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const gettestData = (await axios.get("http://localhost:5000")).data
        .getTestData;

      settestnumber(gettestData);
    };
    fetchdata();
  }, []);
  const medicineNumber = () => {
    const x = new Date();
    const dates = x.getDate();
    const year = x.getFullYear();
    const month = x.getMonth();
    const date = `${month}- ${dates}- ${year}`;
    testnumber.map((item) => {
      if (item.date == date) {
        testCounter = testCounter + 1;
        console.log("count increase");
      }
    });
  };
  medicineNumber();

  return (
    <>
      <Link to="/admin/DashboardTestRecord">
        <div className="bg-blue-100  w-[290px]  h-[180px] mt-2 ml-2 flex ">
          <img
            className="w-50 h-20 mt-[40px]"
            src="../images/patient.png"
          ></img>
          <div className=" innline-block">
            <h1 className=" mt-[40px] ml-10">total test </h1>
            <h1 className="  ml-10 text-green-500 text-2xl">{testCounter} </h1>
            <h1 className="  ml-10">today </h1>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Testnumber;
