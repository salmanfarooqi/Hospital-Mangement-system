import mongoose from "mongoose";

const AddingMedicineSchema = new mongoose.Schema({
  medicineName: {
    type: String,
  },

  Expiremedicine: {
    type: String,
  },

  issuemedicine: {
    type: String,
  },

  medicineQuantity: {
    type: Number,
  },
  date: {
    type: String,
  },
});

const MedicineAddingCollection = mongoose.model(
  "MedicineAddingCollection",
  AddingMedicineSchema
);
export default MedicineAddingCollection;
