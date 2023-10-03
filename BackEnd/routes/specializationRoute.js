import express from "express";
import createSpecialization from "../controller/specialization/createSpecialization.js";
import getSpecializations from "../controller/specialization/getSpecializations.js";
import getDoctorsBySpecialization from "../controller/specialization/getDoctorsBySpecialization.js";
import deleteSpecialization from "../controller/specialization/deleteSpecialization.js";
import addSpecialization from "../controller/specialization/addSpecialization.js";
import getSpecializationsNames from "../controller/specialization/getSpecializationsNames.js";
const specializationRouter = express.Router();

specializationRouter.post(
  "/doctorsbyspecialization",
  getDoctorsBySpecialization
);

// get full detail of specialization documents
specializationRouter.get("/specializations", getSpecializations);

specializationRouter.get("/specializationsnames", getSpecializationsNames);

specializationRouter.post("/specialization", createSpecialization);

specializationRouter.delete("/deletespecialization", deleteSpecialization);

specializationRouter.post("/addspecialization", addSpecialization);

// specializationRouter.put("/specialization", updateSpecialization);

export default specializationRouter;
