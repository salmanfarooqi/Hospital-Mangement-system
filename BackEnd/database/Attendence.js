import mongoose from "mongoose";

const attendenceSchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  fName: {
    type: String,
  },
  attendences: {
    type: String,
  },
  employ: {
    type: String,
  },
  date: {
    type: String,
  },
});
const attendenceCollection = mongoose.model(
  "attendenceCollection",
  attendenceSchema
);
export default attendenceCollection;
