import express from "express";
import MedicineAddingCollection from "../database/addMedicine.js";
const app = express();
const addMedicine = (req, res) => {
  const {
    medicineName,
    medinceIssueDate,
    medinceExpireDate,
    medicineQUantity,
    testDate,
  } = req.body;
  // console.log(medicineQUantity);S
  console.log(testDate);

  const MedicineData = {
    medicineName: medicineName,
    issuemedicine: medinceIssueDate,
    medicineQuantity: medicineQUantity,
    Expiremedicine: medinceExpireDate,
    date: testDate,
  };
  MedicineAddingCollection.insertMany([MedicineData]);
};
export default addMedicine;
