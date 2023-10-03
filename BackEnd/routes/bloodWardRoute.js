import express from "express";
import addBloodWard from "../controller/bloodWard/addBloodWard.js";

const BloodWardRouter = express.Router();

BloodWardRouter.post("/addbloodward", addBloodWard);

export default BloodWardRouter;
