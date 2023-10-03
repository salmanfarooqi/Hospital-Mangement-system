import express from "express";
import createAppointment from "../controller/appointment/createAppointment.js";
import getAppointmentsTimeByIds from "../controller/appointment/getAppointmentsByIds.js";
import changeAppointmentStatus from "../controller/appointment/changeAppointmentStatus.js";
import deleteAppointment from "../controller/appointment/deleteAppointment.js";
// above deleteapp is used for time being

const appointmentRouter = express.Router();

appointmentRouter.post("/appointmentsbyids", getAppointmentsTimeByIds);

appointmentRouter.post("/appointment", createAppointment);

appointmentRouter.put("/changeappointmentstatus", changeAppointmentStatus);

appointmentRouter.delete("/deleteappointment", deleteAppointment);

// appointmentRouter.delete("/deletespecialization", deleteSpecialization);

// appointmentRouter.post("/addspecialization", addSpecialization);

// appointmentRouter.put("/specialization", updateSpecialization);

export default appointmentRouter;
