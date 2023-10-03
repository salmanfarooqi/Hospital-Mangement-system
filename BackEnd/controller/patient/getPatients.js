import Patient from "../../database/patient.js";
const getPatients = async (req, res) => {
  try {
    const patient = await Patient.find();

    // Send the response
    res.status(201).json({
      message: "Patients have displayed successfully!",
      patient: patient,
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ message: "Failed to display Patients." });
  }
};

export default getPatients;
