import Doctor from "../../database/doctor.js";
import Appointment from "../../database/appointment.js";
import Patient from "../../database/patient.js";
const getAppointmentsInfoByPatientId = async (req, res) => {
  /*
  get patient's All Appointments each with doctor name & appointment time & other info
  */
  try {
    const { patientId } = req.body;
    // const patientId = "643da616b531de23f93622b1";

    // getting Patient's Appointments Ids
    const resp = await Patient.findOne(
      { _id: patientId },
      {
        appointment: 1,
      }
    );

    const appointmentsIds = resp.appointment;

    // Getting Appointments document / detail
    const appointments = await Appointment.find({
      _id: { $in: appointmentsIds },
    });

    // apply loop on it (appointments documents)
    // store doctor's ids in doctor_idArr
    const doctorIdsArr = [];

    appointments.map((item) => {
      doctorIdsArr.push(item.doctorId);
    });

    // get these doctor's documents
    const doctors = await Doctor.find(
      {
        _id: { $in: doctorIdsArr },
      },
      {
        firstName: 1,
        lastName: 1,
        // what should we have more?
      }
    );

    // Send the response
    res.status(201).json({
      message: "Patient appointments have displayed successfully!",
      appointments: appointments,
      doctors,
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res
      .status(500)
      .json({ message: "Failed to display Patient appointments." });
  }
};

export default getAppointmentsInfoByPatientId;
