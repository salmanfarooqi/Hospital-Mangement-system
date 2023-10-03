import express from "express";
import MedicalWard from "../database/medicalWard.js";
const app = express();
const emergancymedicine = (req, resp) => {
  const {
    patientName,
    patientFName,
    doctorName,
    date,
    emergencyMedicineName,
    emergencyMedicineDescription,
    status,
  } = req.body;
  const emargancyMedicineData = {
    patientName,
    patientFName,
    doctorName,
    date,
    emergencyMedicineName,
    emergencyMedicineDescription,
    status,
  };
  NurseAddingCollection.insertMany([emargancyMedicineData]);
};
export default emergancymedicine;
