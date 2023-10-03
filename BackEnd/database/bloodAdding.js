import mongoose from "mongoose";

const AddingBloodSchema = new mongoose.Schema({
  bloodGroup: {
    type: String,
  },

  bloodQuantity: {
    type: Number,
  },

  date: {
    type: String,
  },
});
const BloodAddingCollection = mongoose.model(
  "BloodAddingCollection",
  AddingBloodSchema
);
export default BloodAddingCollection;
