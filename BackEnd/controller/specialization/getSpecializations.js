import Specialization from "../../database/specialization.js";

const getSpecializations = async (req, res) => {
  /** return all specializations
   * input : none
   */

  try {
    const specialization = await Specialization.find();

    res.json(specialization);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

export default getSpecializations;
