import express from "express";
import RegistrationCollection from "../database/patientsignup.js";
import MedicineAddingCollection from "../database/addMedicine.js";
import BloodAddingCollection from "../database/bloodAdding.js";
import doctorAddingCollection from "../database/doctorAdding.js";
import TestAddingCollection from "../database/addTest.js";
import Appointment from "../database/appointment.js";

const app = express();

const getsData = async (req, res) => {
  const getAppointment = await Appointment.find({}).populate(
    "patientId doctorId"
  );

  // console.log("appointment docs " + appointmentDocuments);
  res.json({
    getAppointment,
  });
};

export default getsData;
