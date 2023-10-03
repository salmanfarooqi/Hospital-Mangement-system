import mongoose from "mongoose";
const { Schema } = mongoose;

const appiontmentSchema = new Schema({
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
  testArr: [
    { type: mongoose.Schema.Types.ObjectId, ref: "TestAddingCollection" },
  ],
  pharmacyArr: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pharmacy" }],
  medicalWardArr: [
    { type: mongoose.Schema.Types.ObjectId, ref: "MedicalWard" },
  ],
  bloodWardArr: [{ type: mongoose.Schema.Types.ObjectId, ref: "BloodWard" }],
  appointmentTime: Date,
  duration: Number,
  status: String,
  // request, accepted, waitForPescription,  goToPharmacy, goToTestLab, goToBloodWard, goToMedicalWard, returnToDoctor
  // 0 mean request / pending, 1 mean upcoming/accepted, 2 mean waitingForLabTestSuggestion,
  //  3 mean waitingForTreatment, 4 mean finished, 5 or -1 mean canceled
});

const Appointment = mongoose.model("Appointment", appiontmentSchema);

export default Appointment;
