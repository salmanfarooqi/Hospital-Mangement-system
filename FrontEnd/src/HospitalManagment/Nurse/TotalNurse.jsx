import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
function TotalNurse() {
  const [NurseData, setNurseData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const getNursedata = (await axios.get("http://localhost:5000/")).data
        .getNurseData;
      console.log(getNursedata);
      setNurseData(getNursedata);
    };

    fetchdata();
  }, []);

  return (
    <>
      <Link to="/admin/DashboardNurseRecord">
        <div className="bg-blue-100  w-[350px]  h-[180px] mt-2 flex cursor-pointer ml-4">
          <img
            className="w-50 h-20 mt-[40px]"
            src="../images/patient.png"
          ></img>
          <div className=" innline-block">
            <h1 className=" mt-[40px] ml-10">total Number of Nurse </h1>
            <h1 className="  ml-10 text-green-500 text-2xl">
              {NurseData.length}
            </h1>
          </div>
        </div>
      </Link>
    </>
  );
}
export default TotalNurse;
