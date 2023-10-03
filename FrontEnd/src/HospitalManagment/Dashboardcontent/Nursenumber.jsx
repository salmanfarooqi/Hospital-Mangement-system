import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Nursenumber = () => {
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
        <div className=" flex ml-1">
          <div className="bg-blue-100  w-[290px]  h-[180px] mt-2 flex ">
            <img
              className="w-50 h-20 mt-[40px]"
              src="../images/patient.png"
            ></img>
            <div className=" innline-block">
              <h1 className=" mt-[40px] ml-10">total Nurse </h1>
              <h1 className="  ml-10 text-green-500 text-2xl">
                {NurseData.length}
              </h1>
              <h1 className="  ml-10">till date </h1>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Nursenumber;
