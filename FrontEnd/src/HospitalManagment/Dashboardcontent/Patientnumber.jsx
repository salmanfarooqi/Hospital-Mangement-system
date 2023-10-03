import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Patientnumber = () => {
  let patientCounter = 0;
  const [patientdata, setpatientdata] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const getpatientdata = (await axios.get("http://localhost:5000/patients"))
        .data.patient;
      // console.log("data",getpatientdata)
      setpatientdata(getpatientdata);
    };

    fetchdata();

    console.log("pat", patientdata);
  }, []);

  const x = new Date();
  const dates = x.getDate();
  const year = x.getFullYear();
  const month = x.getMonth();
  let date = `${dates} - ${month} -${year}`;
  patientdata.map((item) => {
    if (item.date == date) {
      patientCounter = patientCounter + 1;
      console.log("count increase");
    }
  });

  return (
    <>
      <Link to="/admin/DashbordPatientRecord">
        <div className="bg-blue-100  w-[250px]  h-[180px] mt-2 ml-2 flex  cursor-pointer ">
          <img
            className="w-50 h-20 mt-[40px]"
            src="../images/patient.png"
          ></img>
          <div className=" innline-block">
            <h1 className=" mt-[40px] ml-10">total patient </h1>
            <h1 className="  ml-10 text-green-500 text-2xl">
              {patientCounter}{" "}
            </h1>
            <h1 className="  ml-10">today </h1>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Patientnumber;
