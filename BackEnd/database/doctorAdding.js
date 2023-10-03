import mongoose from "mongoose";

const doctorAddingScehma = new mongoose.Schema({
  Name: {
    type: String,
    require: true,
  },
  fatherName: {
    type: String,
    require: true,
  },
  Email: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  specializations: {
    type: String,
  },
  qualification: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});
const doctorAddingCollection = mongoose.model(
  "doctorAddingCollection",
  doctorAddingScehma
);

export default doctorAddingCollection;
