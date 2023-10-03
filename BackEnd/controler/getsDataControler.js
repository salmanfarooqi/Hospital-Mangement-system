import express from "express";
import RegistrationCollection from "../database/patientsignup.js";
import MedicineAddingCollection from "../database/addMedicine.js";
import BloodAddingCollection from "../database/bloodAdding.js";
import doctorAddingCollection from "../database/doctorAdding.js";
import TestAddingCollection from "../database/addTest.js";
import NurseAddingCollection from "../database/AddNurse.js";
import attendenceCollection from "../database/Attendence.js";
import Pharmacy from "../database/pharmacy.js";
import MedicalWard from "../database/medicalWard.js";

const app = express();

const getsData = async (req, res) => {
  const getMedicineData = await MedicineAddingCollection.find({});
  const getTestData = await TestAddingCollection.find({});
  const getpatientData = await RegistrationCollection.find({});

  //   const getTestData= await TestAddingCollection.find({})

  const getdoctorData = await doctorAddingCollection.find({});
  const getNurseData = await NurseAddingCollection.find({});
  const getBloodData = await BloodAddingCollection.find({});
  const getAttendenceData = await attendenceCollection.find({});
  const getDoctorSendingMedicine = await Pharmacy.find({});
  const getMedicalWardData = await MedicalWard.find({});
  //   const getAbbasMedicineData = await abbasMedincecollection.find({});
  

  res.json({
    getTestData,
    getMedicineData,
    getpatientData,
    getdoctorData,
    getNurseData,
    getBloodData,
    getAttendenceData,
    getDoctorSendingMedicine,
    getMedicalWardData,
  });
};

export default getsData;
