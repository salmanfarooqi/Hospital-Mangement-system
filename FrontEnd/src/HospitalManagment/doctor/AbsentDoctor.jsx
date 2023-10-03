import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function AbsentDoctor() {
  let absentDoctorCounter = 0;
  const [AbsentDoctor, setAbsentDoctor] = useState([]);
  useEffect(() => {
    const fetechData = async () => {
      const attendencedata = (await axios.get("http://localhost:5000/")).data
        .getAttendenceData;
      console.log("abasent", attendencedata);
      setAbsentDoctor(attendencedata);
    };
    fetechData();
  }, []);
  const numberDoctorAbsent = () => {
    let todaydate = new Date();
    const Day = todaydate.getDate();
    const month = todaydate.getMonth();
    const year = todaydate.getFullYear();
    const dateData = `${Day}-${month}-${year}`;
    console.log("datae", dateData);

    AbsentDoctor.map((item) => {
      if (
        item.employ == "Doctor" &&
        item.attendences == "Absent" &&
        item.date == dateData
      ) {
        absentDoctorCounter += 1;
      }
    });
  };
  numberDoctorAbsent();

  return (
    <>
      <Link to="/admin/DoctorAbsentRecord">
        <div className="bg-blue-100  w-[350px]  h-[180px] mt-2 flex cursor-pointer ml-2">
          <img
            className="w-50 h-20 mt-[40px]"
            src="../images/patient.png"
          ></img>
          <div className=" innline-block">
            <h1 className=" mt-[40px] ml-10">total Absent Doctor </h1>
            <h1 className="  ml-10 text-green-500 text-2xl">
              {absentDoctorCounter}{" "}
            </h1>
          </div>
        </div>
      </Link>
    </>
  );
}

export default AbsentDoctor;
