import Specialization from "../../database/specialization.js";

const getSpecializationsNames = async (req, res) => {
  /** return all specializations
   * input : none
   */

  try {
    const specializationNames = await Specialization.find({}, { name: 1 });

    // Send the response
    res.status(201).json({
      message: "Specialization's Names has displayed successfully!",
      specializationNames: specializationNames,
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res
      .status(500)
      .json({ message: "Failed to display Specialization's Names." });
  }
};

export default getSpecializationsNames;
