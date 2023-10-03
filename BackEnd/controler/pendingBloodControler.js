import BloodWard from "../database/bloodWard.js";
import Appointment from "../database/appointment.js";
import Patient from "../database/patient.js";
import Doctor from "../database/doctor.js";

const pendingBlood = async (req, res) => {
  try {
    const { _id } = req.body;
    const result = await BloodWard.findByIdAndUpdate(
      { _id },
      {
        $set: {
          status: "completed",
        },
      }
    );

    // storing data for further changes in other collections
    const { appointmentId, patientName, doctorName } = result;

    // changing appointment status to Completed
    const appointmentDocument = await Appointment.findOneAndUpdate(
      { _id: appointmentId },
      {
        $set: {
          status: "returnToDoctor",
        },
      },
      { returnDocument: true }
    );

    // notification to patient
    const patientDocument = await Patient.findOneAndUpdate(
      { _id: appointmentDocument.patientId },
      {
        $push: {
          notifications: {
            message: "Meet with Dr." + doctorName,
          },
        },
      },
      { returnDocument: true }
    );

    // Send the response
    res.status(201).json({
      message: "Blood has updated successfully!",
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ message: "Failed to update Blood." });
  }
};
export default pendingBlood;
