import Pharmacy from "../database/pharmacy.js";
import express from "express";

const app = express();
const addpharmacy = (req, res) => {
  const pharmacyData = {
    patientName: "abbas",
  };
  console.log(pharmacyData);
  Pharmacy.insertMany([pharmacyData]);
};

export default addpharmacy;
