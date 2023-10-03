import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  image: {
    data: Buffer,
    type: String,
  },
});
const imgCollection = mongoose.model("image", imageSchema);
export default imgCollection;
