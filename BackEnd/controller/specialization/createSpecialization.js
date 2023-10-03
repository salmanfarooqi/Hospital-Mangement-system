import Specialization from "../../database/specialization.js";

const createSpecialization = async (req, res) => {
  try {
    const specialization = await Specialization.create(req.body);

    res.json(specialization);
  } catch (error) {
    res.send(error);
  }
};

export default createSpecialization;
