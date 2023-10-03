import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
function LeaveDoctor() {
  const [LeaveDoctor, setLeaveDoctor] = useState([]);
  let LeaveDoctorCounter = 0;
  useEffect(() => {
    const fetchdata = async () => {
      const attendencedata = (await axios.get("http://localhost:5000/")).data
        .getAttendenceData;
      console.log("attendence", attendencedata);
      console.log("hay");
      setLeaveDoctor(attendencedata);
    };
    fetchdata();
  }, []);

  const numberDoctorLeave = () => {
    let todaydate = new Date();
    LeaveDoctor.map((item) => {
      if (item.employ == "Doctor" && item.attendences == "Leave") {
        LeaveDoctorCounter = LeaveDoctorCounter + 1;
      }
    });
  };
  numberDoctorLeave();

  return (
    <>
      <Link to="/admin/DoctorLeaveRecord">
        <div className="bg-blue-100  w-[350px]  h-[180px] mt-2 flex cursor-pointer ml-4">
          <img
            className="w-50 h-20 mt-[40px]"
            src="../images/patient.png"
          ></img>
          <div className=" innline-block">
            <h1 className=" mt-[40px] ml-10">number of doctor on leave </h1>
            <h1 className="  ml-10 text-green-500 text-2xl">
              {LeaveDoctorCounter}{" "}
            </h1>
          </div>
        </div>
      </Link>
    </>
  );
}

export default LeaveDoctor;
