import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
function LeaveNurse() {
  const [LeaveNurse, setLeaveNurse] = useState([]);
  let LeaveNurseCounter = 0;
  useEffect(() => {
    const fetchdata = async () => {
      const attendencedata = (await axios.get("http://localhost:5000/")).data
        .getAttendenceData;
      console.log("attendence", attendencedata);
      console.log("hay");
      setLeaveNurse(attendencedata);
    };
    fetchdata();
  }, []);

  const numberNurseLeave = () => {
    let todaydate = new Date();
    LeaveNurse.map((item) => {
      if (item.employ == "Nurse" && item.attendence == "Leave") {
        LeaveNurseCounter = LeaveNurseCounter + 1;
      }
      console.log("testing", 1 + 2);
    });
  };
  numberNurseLeave();

  return (
    <>
      <Link to="/admin/NurseLeaveRecord">
        <div className="bg-blue-100  w-[350px]  h-[180px] mt-2 flex cursor-pointer ml-4">
          <img
            className="w-50 h-20 mt-[40px]"
            src="../images/patient.png"
          ></img>
          <div className=" innline-block">
            <h1 className=" mt-[40px] ml-10">number of Nurse on leave </h1>
            <h1 className="  ml-10 text-green-500 text-2xl">
              {LeaveNurseCounter}{" "}
            </h1>
          </div>
        </div>
      </Link>
    </>
  );
}
export default LeaveNurse;
