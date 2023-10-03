import mongoose from "mongoose";
const AddTestSchema = new mongoose.Schema({
  patientName: String,
  patientFName: String,
  doctorName: String,
  date: {
    type: String,
  },
  testDetail: String,
  testtype: String,
  status: {
    type: String,
    default: "pending",
  },
  appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: "Appointment" },
});
const TestAddingCollection = mongoose.model(
  "TestAddingCollection",
  AddTestSchema
);
export default TestAddingCollection;
