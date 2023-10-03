import express from "express";
import NurseAddingCollection from "../database/AddNurse.js";

const app = express();

const addNurse = (req, resp) => {
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

  console.log(name, specialization);
  const NurseData = {
    Name: name,
    fatherName: fname,
    gender: gender,
    qualification: qualification,
    age: age,
    email: Email,
    password: password,
    specializations: specialization,
  };
  NurseAddingCollection.insertMany([NurseData]);
};
export default addNurse;
