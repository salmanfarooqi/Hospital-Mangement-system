import Appointment from "../../database/appointment.js";
import Patient from "../../database/patient.js";
import Doctor from "../../database/doctor.js";

const createAppointment = async (req, res) => {
  try {
    const { patientId, doctorId, appointmentTime, duration, status } = req.body;

    // Creating Appointment document
    const appointment = await Appointment.create({
      doctorId: doctorId,
      patientId: patientId,
      appointmentTime: new Date(appointmentTime),
      duration: duration,
      status: status, // 0 mean request / pending, 1 mean upcoming/accepted, 2 mean finished
    });

    // Adding Appointment _id to doctor Appointment Array
    const doctor = await Doctor.findOneAndUpdate(
      { _id: doctorId },
      { $addToSet: { appointment: appointment._id } },
      { returnDocument: true }
    );

    // Adding Appointment _id to patient Appointment Array
    const patient = await Patient.updateOne(
      { _id: patientId },
      {
        $addToSet: { appointment: appointment._id },
        $push: {
          notifications: {
            message:
              "Appointment request has been sent to Dr. " +
              doctor.firstName +
              " " +
              doctor.lastName +
              ".",
          },
        },
      }
    );

    // Send the response
    res.status(201).json({
      message: "Appointment has created successfully!",
      appointment: appointment,
      doctor,
      patient,
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ message: "Failed to create Appointment." });
  }
};

export default createAppointment;
