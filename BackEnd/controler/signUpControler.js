import express from "express";
import RegistrationCollection from "../database/patientsignup.js";

const app = express();
export const signUp = async (req, res) => {
  const { name, fname, disease, gender, age, Email, password } = req.body;

  let RegisterData;
  RegisterData = {
    Name: name,
    fatherName: fname,
    gender: gender,
    disease: disease,
    age: age,
    Email: Email,
    password: password,
  };

  console.log(Email);

  await RegistrationCollection.insertMany([RegisterData]);
};

export default signUp;
