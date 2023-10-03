import mongoose from "mongoose";

const RegistrationScehma = new mongoose.Schema({
  Name: {
    type: String,
  },
  fatherName: {
    type: String,
  },
  Email: {
    type: String,
  },
  gender: {
    type: String,
  },
  disease: {
    type: String,
  },
  age: {
    type: Number,
  },
  password: {
    type: String,
  },
});

const RegistrationCollection = mongoose.model(
  "RegistrationCollection",
  RegistrationScehma
);

export default RegistrationCollection;
