import Specialization from "../../database/specialization.js";
import axios from "axios";

const updateSpecialization = async (req, res) => {
  try {
    const { name, doctorId } = req.body;

    res.send("result of doctorId: " + doctorId);

    // const resp = await axios.get("http://localhost:5000/Specialization");
    // const specialization = resp.data;
    // res.send(specialization);
  } catch (error) {
    res.send(error);
  }
};

export default updateSpecialization;
