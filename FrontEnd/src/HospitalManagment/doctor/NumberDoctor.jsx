import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const NumberDoctor = () => {
  const [medicineRecorddata, setmedicineRecorddata] = useState([]);
  const [Data, setData] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      const getData = (await axios.get("http://localhost:5000/doctors")).data;
      // .doctor;
      console.log("doctors dataa", getData);
      //  const medicine = getData.map(medicine => medicine.medicineName)
      //  console.log(medicine)
      setmedicineRecorddata(getData);

      //
    };
    fetchdata();
    // console.log(medicineRecorddata);
  }, []);
  return (
    <>
      <Link to="/admin/DoctorTotalRecord">
        <div className="bg-blue-100  w-[350px]  h-[180px] mt-2 flex cursor-pointer ml-4">
          <img
            className="w-50 h-20 mt-[40px]"
            src="../images/patient.png"
          ></img>
          <div className=" innline-block">
            <h1 className=" mt-[40px] ml-10 ">total number of doctor </h1>
            <h1 className="  ml-10 text-green-500 text-2xl">
              {medicineRecorddata.length}{" "}
            </h1>
          </div>
        </div>
      </Link>
    </>
  );
};

export default NumberDoctor;
