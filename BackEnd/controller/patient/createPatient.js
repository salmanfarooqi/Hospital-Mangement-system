import Patient from "../../database/patient.js";

const createPatient = async (req, res) => {
  try {
    const patient = await Patient.create(req.body);

    // Send the response
    res.status(201).json({
      message: "Patient has created successfully!",
      patient: patient,
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ message: "Failed to create Patient." });
  }
};

export default createPatient;
