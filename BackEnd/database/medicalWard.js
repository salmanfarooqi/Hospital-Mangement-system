import mongoose from "mongoose";
const MedicalWardSchema = new mongoose.Schema({
  patientName: String,
  patientFName: String,
  doctorName: String,
  date: {
    type: String,
  },
  emergencyMedicineName: String,
  emergencyMedicineDescription: String,
  status: {
    type: String,
    default: "pending",
  },
  appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: "Appointment" },
});
const MedicalWard = mongoose.model("MedicalWard", MedicalWardSchema);
export default MedicalWard;
