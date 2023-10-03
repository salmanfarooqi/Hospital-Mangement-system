import axios from "axios";
import { useState, useEffect } from "react";

const RemaningMedicine = () => {
  let count = 0;
  let SoldMedicineCounter = 0;
  const [medicineData, setMedicineData] = useState([]);
  const [totalmedicine, setTotalMedicine] = useState(0);
  const [soldMedicineQuantity, setsoldMedicineQuantity] = useState(0);
  const [SoldMedicineData, setSoldMedicine] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const getmedicineData = (await axios.get("http://localhost:5000/")).data
          .getMedicineData;
        const getsoldData = (await axios.get("http://localhost:5000/")).data
          .getDoctorSendingMedicine;
        console.log("sold medicine", getsoldData);
        setMedicineData(getmedicineData);
        setSoldMedicine(getsoldData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchdata();
  }, []);

  medicineData.map((item) => {
    count += item.medicineQuantity;
    // setTotalMedicine(count);
  });
  console.log("medicine count is ", count);

  // setTotalMedicine(count);

  SoldMedicineData.map((item) => {
    SoldMedicineCounter = SoldMedicineCounter + item.medicineQuantity;
    console.log("counter is ", SoldMedicineCounter);
    // setsoldMedicineQuantity(SoldMedicineCounter);
  });

  console.log("solde medincine counter", SoldMedicineCounter);

  return (
    <>
      <div className="bg-blue-100 w-[290px] h-[180px] mt-2 ml-2 flex">
        <img
          className="w-50 h-20 mt-[40px]"
          src="../images/patient.png"
          alt="Patient"
        />
        <div className="innline-block">
          <h1 className="mt-[40px] ml-10">Remaining Medicines</h1>
          <h1 className="ml-10 text-green-500 text-2xl">
            {count - SoldMedicineCounter}
          </h1>
          <h1 className=" ml-10">Quantity</h1>
        </div>
      </div>
    </>
  );
};

export default RemaningMedicine;
