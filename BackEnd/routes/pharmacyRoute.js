import express from "express";
import addPharmacy from "../controller/pharmacy/addPharmacy.js";

const PharmacyRouter = express.Router();

PharmacyRouter.post("/suggestpharmacy", addPharmacy);

export default PharmacyRouter;
