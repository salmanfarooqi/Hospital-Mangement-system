import express from "express";
import addMedicalWard from "../controller/medicalWard/addMedicalWard.js";
const MedicalWardRouter = express.Router();

MedicalWardRouter.post("/addmedicalward", addMedicalWard);

export default MedicalWardRouter;
