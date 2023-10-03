import axios from "axios";
import { useState, useEffect } from "react";

const RemaningBlood = () => {
  let totalBloodcount = 0;
  let soldBloodcount = 0;
  const [medicineData, setMedicineData] = useState([]);
  const [totalmedicine, setTotalMedicine] = useState(0);
  const [soldBlood, setsoldBlood] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const getmedicineData = (await axios.get("http://localhost:5000/")).data
          .getBloodData;
        const getsoldData = (
          await axios.get("http://localhost:5000/getBloodData")
        ).data;
        console.log("soldbold", getsoldData);

        setMedicineData(getmedicineData);
        setsoldBlood(getsoldData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchdata();
  }, []);

  medicineData.map((item) => {
    totalBloodcount = totalBloodcount + item.bloodQuantity;
  });
  soldBlood.map((item) => {
    soldBloodcount = soldBloodcount + item.bloodQuantity;
  });
  console.log("totla blood cout", totalBloodcount);
  console.log("sold blood Count", soldBloodcount);

  return (
    <>
      <div className="bg-blue-100 w-[400px] h-[180px] mt-2 ml-6 flex">
        <img
          className="w-50 h-20 mt-[40px]"
          src="../images/patient.png"
          alt="Patient"
        />
        <div className="innline-block">
          <h1 className="mt-[40px] ml-10">Remaining Blood</h1>
          <h1 className="ml-10 text-green-500 text-2xl">
            {totalBloodcount - soldBloodcount}
          </h1>
        </div>
      </div>
    </>
  );
};

export default RemaningBlood;
