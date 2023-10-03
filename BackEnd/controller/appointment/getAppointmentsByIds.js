import axios from "axios";
import Appointment from "../../database/appointment.js";
import Patient from "../../database/patient.js";
import Doctor from "../../database/doctor.js";

const getAppointmentsTimeByIds = async (req, res) => {
  try {
    const appointmentsArr = [];
    const { patientId, doctorId } = req.body;

    // Getting Patient's Appointment Ids
    const patientDetail = await Patient.findOne(
      { _id: patientId },
      {
        appointment: 1,
      }
    );

    // Storing these Appointments Ids in Array
    if (patientDetail) {
      appointmentsArr.push(...patientDetail.appointment);
    }

    const doctorDetail = await Doctor.findOne(
      { _id: doctorId },
      {
        appointment: 1,
      }
    );

    // Storing these Appointments Ids in Array
    if (doctorDetail) {
      appointmentsArr.push(...doctorDetail.appointment);
    }

    // Get only those appointments which have request or upcomming status
    const appointments = await Appointment.find(
      { _id: { $in: appointmentsArr }, status: { $in: [0, 1] } },

      { appointmentTime: 1, duration: 1 }
    );

    // Send the response
    res.status(201).send({
      message: "appointmentss have displayed successfully!",
      appointments: appointments,
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ message: "Failed to display appointments." });
  }
};

export default getAppointmentsTimeByIds;
