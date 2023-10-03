import mongoose from "mongoose";
const { Schema } = mongoose;

const patientSchema = new Schema({
  firstName: String,
  lastName: String,
  fatherName: String,
  age: Number,
  gender: String,
  email: { type: String, unique: true },
  phone: String,
  username: String,
  password: String,
  // image: String,
  bloodGroup: String,
	date: String,
  // height: Number,
  weight: Number,
  address: String,

  appointment: [{ type: mongoose.Schema.Types.ObjectId, ref: "Appointment" }],
  testArr: [
    { type: mongoose.Schema.Types.ObjectId, ref: "TestAddingCollection" },
  ],
  pharmacyArr: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pharmacy" }],
  medicalWardArr: [
    { type: mongoose.Schema.Types.ObjectId, ref: "MedicalWard" },
  ],
  bloodWardArr: [{ type: mongoose.Schema.Types.ObjectId, ref: "BloodWard" }],
  notifications: [
    {
      message: String,
      date: { type: Date, default: Date.now },
      read: { type: Boolean, default: false },
    },
  ],
});

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;
