import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function TotalBlood() {
  let totalBloodcount = 0;
  const [totalBlood, settotalBlood] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const bloodData = (await axios.get("http://localhost:5000/")).data
        .getBloodData;
      console.log(bloodData);
      settotalBlood(bloodData);
    };
    fetchdata();
  }, []);

  totalBlood.map((item) => {
    totalBloodcount = totalBloodcount + item.bloodQuantity;
  });
  return (
    <>
      <Link to="/blood/TotalBloodRecords">
        <div className="bg-blue-100  w-[400px]  h-[180px] mt-2 flex cursor-pointer ml-4">
          <img
            className="w-50 h-20 mt-[40px]"
            src="../images/patient.png"
          ></img>
          <div className=" innline-block">
            <h1 className=" mt-[40px] ml-10">total blood </h1>
            <h1 className="  ml-10 text-green-500 text-2xl">
              {totalBloodcount}{" "}
            </h1>
          </div>
        </div>
      </Link>
    </>
  );
}

export default TotalBlood;
