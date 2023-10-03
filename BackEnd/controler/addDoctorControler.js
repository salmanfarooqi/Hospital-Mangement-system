import doctorAddingCollection from "../database/doctorAdding.js";
import express from "express";

const app = express();

const addDoctor = (req, resp) => {
  const {
    name,
    fname,
    qualification,
    specialization,
    gender,
    age,
    Email,
    password,
  } = req.body;

  console.log(specialization);
  const doctorData = {
    Name: name,
    fatherName: fname,
    gender: gender,
    // disease: disease,
    age: age,
    email: Email,
    password: password,
    specializations: specialization,
  };

  doctorAddingCollection.insertMany([doctorData]);
};

export default addDoctor;
