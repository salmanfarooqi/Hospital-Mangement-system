import Patient from "../../database/patient.js";

const getPatientDetails = async (req, res) => {
  /*
  get patient's All Appointments which have Post Procedure status with Patient name & appointment time & other info
  */
  try {
    const patientId = req.params.id;

    // getting patient's Appointments Ids
    const patient = await Patient.findOne({ _id: patientId })
      .populate({
        path: "appointment",
        // match: { status: 1 },
        options: { sort: { appointmentTime: 1 } },
        populate: {
          path: "doctorId",
        },
      })
      .populate("pharmacyArr")
      .populate("bloodWardArr")
      .populate("medicalWardArr")
      .populate("testArr");

    // Send the response
    res.status(201).json({
      message: "Patient details have displayed successfully!",
      patient,
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ message: "Failed to display Patient  details." });
  }
};

export default getPatientDetails;
