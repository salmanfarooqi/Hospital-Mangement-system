import mongoose from "mongoose";
const PharmacySchema = new mongoose.Schema({
  patientName: String,
  patientFatherName: String,
  doctorName: String,
  date: {
    type: String,
  },
  medicineName: String,
  medicineQuantity: Number,
  medicineDescription: String,
  status: {
    type: String,
    default: "pending",
  },
  appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: "Appointment" },
});
const Pharmacy = mongoose.model("Pharmacy", PharmacySchema);
export default Pharmacy;
