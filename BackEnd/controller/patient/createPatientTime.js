// this file is just for practice you can delete this file
import Patient from "../../database/patient.js";

const createPatientTime = async (req, res) => {
  try {
    const patient = await Patient.create({
      birthDate: new Date("2023-05-01T11:53:00.000+00:00"),
    });

    // Send the response
    res.status(201).json({
      message: "Patient's Time has created successfully!",
      patient: patient,
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ message: "Failed to display Patient's Time." });
  }
};

export default createPatientTime;
