import mongoose from "mongoose";
const { Schema } = mongoose;

const doctorSchema = new Schema({
  firstName: String,
  lastName: String,
  fatherName: String,
  age: Number,
  gender: String,
  email: { type: String, unique: true },
  phone: String,
  // username: String,
  password: String,
  // image: String,
  address: String,
  education: String,
  appointment: [{ type: mongoose.Schema.Types.ObjectId, ref: "Appointment" }],
  specialization: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Specialization" },
  ],
  testArr: [
    { type: mongoose.Schema.Types.ObjectId, ref: "TestAddingCollection" },
  ],
  pharmacyArr: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pharmacy" }],
  experience: String,
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

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;
