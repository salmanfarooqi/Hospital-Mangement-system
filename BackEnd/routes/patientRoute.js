import express from "express";

import getPatients from "../controller/patient/getPatients.js";
import createPatient from "../controller/patient/createPatient.js";
import updatePatient from "../controller/patient/updatePatient.js";
import getPatientTime from "../controller/patient/getPatientTime.js";
import createPatientTime from "../controller/patient/createPatientTime.js";
import getPatientDetails from "../controller/patient/getPatientDetails.js";

const patientRouter = express.Router();

patientRouter.get("/patients", getPatients);

patientRouter.get("/patientdetail/:id", getPatientDetails);

patientRouter.get("/patienttime", getPatientTime);

patientRouter.post("/patient", createPatient);

patientRouter.post("/patienttime", createPatientTime);

patientRouter.put("/patient/:id", updatePatient);

export default patientRouter;
