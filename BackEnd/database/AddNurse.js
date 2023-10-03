import mongoose from "mongoose";

const NurseAddingSchema = new mongoose.Schema({
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
    require: true,
  },
  qualification: {
    type: String,
    require: true,
  },
  email: {
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
const NurseAddingCollection = mongoose.model(
  "NurseAddingCollection",
  NurseAddingSchema
);

export default NurseAddingCollection;
