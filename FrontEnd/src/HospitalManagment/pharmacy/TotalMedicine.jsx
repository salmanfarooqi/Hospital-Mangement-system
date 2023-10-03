import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const TotalMedicine = () => {
  let medicineCount = 0;
  const [medicineData, setMedicineData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const getmedicineData = (await axios.get("http://localhost:5000/")).data
        .getMedicineData;
      setMedicineData(getmedicineData);
    };

    fetchdata();
  }, []);

  return (
    <>
      <Link to="/admin/TotalMedicineRecord">
        <div className="bg-blue-100  w-[290px]  h-[180px] mt-2 ml-2 flex ">
          <img
            className="w-50 h-20 mt-[40px]"
            src="../images/patient.png"
          ></img>
          <div className=" innline-block">
            <h1 className=" mt-[40px] ml-10">total medicine </h1>
            <h1 className="  ml-10 text-green-500 text-2xl">
              {medicineData.length}
            </h1>
          </div>
        </div>
      </Link>
    </>
  );
};

export default TotalMedicine;
