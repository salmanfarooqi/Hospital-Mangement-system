import mongoose from "mongoose";
const { Schema } = mongoose;

const learningSchema = new Schema({
  status: Number,
});

const Learning = mongoose.model("Learning", learningSchema);

export default Learning;
