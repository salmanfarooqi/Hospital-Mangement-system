import Doctor from "../../database/doctor.js";
const getDoctors = async (req, res) => {
  try {
    const doctor = await Doctor.find();

    res.json(doctor);
  } catch (error) {
    res.send(error);
  }
};

export default getDoctors;
