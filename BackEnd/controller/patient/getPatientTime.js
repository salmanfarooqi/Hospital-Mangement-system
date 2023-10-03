// this file is just for practice you can delete this file
import Patient from "../../database/patient.js";
const getPatientTime = async (req, res) => {
  try {
    const patientTime = await Patient.findOne({
      _id: "644f692a1d70049c6e847c08",
    });

    const time = patientTime.birthDate;

    console.log("utc time hours: " + time.getUTCHours());

    // Send the response
    res.status(201).json({
      message: "Patient's Time displayed successfully!",
      patientTime: patientTime,
      time: time,
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ message: "Failed to display Patient's Time." });
  }
};

export default getPatientTime;
