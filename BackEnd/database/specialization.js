import mongoose from "mongoose";
const { Schema } = mongoose;

const specializationSchema = new Schema({
  name: { type: String, unique: true },
  doctorId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Doctor" }],
});

const Specialization = mongoose.model("Specialization", specializationSchema);

export default Specialization;
