import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
function AbsentNurse() {
  const [AbsentNurse, setAbsentDoctor] = useState([]);
  let AbsentNurseCounter = 0;
  useEffect(() => {
    const fetchdata = async () => {
      const attendencedata = (await axios.get("http://localhost:5000/")).data
        .getAttendenceData;
      console.log("attendence", attendencedata);
      console.log("hay");
      setAbsentDoctor(attendencedata);
    };
    fetchdata();
  }, []);

  const numberNurseAbsent = () => {
    let todaydate = new Date();
    AbsentNurse.map((item) => {
      if (item.employ == "Nurse" && item.attendences == "Absent") {
        AbsentNurseCounter = AbsentNurseCounter + 1;
      }
    });
  };
  numberNurseAbsent();

  return (
    <>
      <Link to="/admin/NurseAbsentRecord">
        <div className="bg-blue-100  w-[350px]  h-[180px] mt-2 flex cursor-pointer ml-4">
          <img
            className="w-50 h-20 mt-[40px]"
            src="../images/patient.png"
          ></img>
          <div className=" innline-block">
            <h1 className=" mt-[40px] ml-10">number of Absent Nurse </h1>
            <h1 className="  ml-10 text-green-500 text-2xl">
              {AbsentNurseCounter}{" "}
            </h1>
          </div>
        </div>
      </Link>
    </>
  );
}

export default AbsentNurse;
