// This route is depricated and Is not use longer.
// these work will done in single file named getAppointmentsByIds
import Patient from "../../database/patient.js";
const getAppointmentsIdsFromPatient = async (req, res) => {
  try {
    const { patientId } = req.body;
    const appointments = await Patient.findOne(
      { _id: patientId },
      {
        appointment: 1,
      }
    );

    // Send the response
    res.status(201).json({
      message: "Patients appointments have displayed successfully!",
      appointments: appointments,
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res
      .status(500)
      .json({ message: "Failed to display Patients appointments." });
  }
};

export default getAppointmentsIdsFromPatient;
