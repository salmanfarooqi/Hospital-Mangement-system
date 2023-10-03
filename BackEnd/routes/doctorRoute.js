import express from "express";
import getDoctors from "../controller/doctor/getDoctors.js";
import createDoctor from "../controller/doctor/createDoctor.js";
import updateDoctor from "../controller/doctor/updateDoctor.js";
import getDoctorsById from "../controller/doctor/getDoctorsById.js";
import getAppointmentsInfoByDoctorId from "../controller/doctor/getAppointmentsIdsFromDoctor.js";
import getPostPatientAppointments from "../controller/doctor/getPostPatientAppointments.js";
import getDoctorDetails from "../controller/doctor/getDoctorDetails.js";

const doctorRouter = express.Router();

doctorRouter.get("/doctors", getDoctors);

doctorRouter.get("/doctorappointments/:id", getPostPatientAppointments);

doctorRouter.get("/doctordetail/:id", getDoctorDetails);

doctorRouter.post("/doctorsbyid", getDoctorsById);

// get doctor's All Appointments with Patient name & appointment time & other info
doctorRouter.post("/appointmentsinfobyDoctorid", getAppointmentsInfoByDoctorId);

doctorRouter.post("/doctor", createDoctor);

doctorRouter.put("/doctor/:id", updateDoctor);

export default doctorRouter;
