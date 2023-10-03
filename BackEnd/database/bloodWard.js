import mongoose from "mongoose";
const BloodWardSchema = new mongoose.Schema({
  patientName: String,
  patientFName: String,
  doctorName: String,
  date: {
    type: String,
  },
  bloodGroup: String,
  bloodQuantity: Number,
  status: {
    type: String,
    default: "pending",
  },
  appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: "Appointment" },
});
const BloodWard = mongoose.model("BloodWard", BloodWardSchema);
export default BloodWard;
