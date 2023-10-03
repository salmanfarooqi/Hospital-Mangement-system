import Doctor from "../../database/doctor.js";
import Appointment from "../../database/appointment.js";
import Patient from "../../database/patient.js";
const getAppointmentsInfoByDoctorId = async (req, res) => {
  /*
  get doctor's All Appointments with Patient name & appointment time & other info
  */
  try {
    const { doctorId } = req.body;
    // const doctorId = "643da616b531de23f93622b1";

    // getting Doctor's Appointments Ids
    const doctor = await Doctor.findOne(
      { _id: doctorId },
      {
        appointment: 1,
        firstName: 1,
        lastName: 1,
        notifications: 1,
      }
    );

    const appointmentsIds = doctor.appointment;

    // Getting Appointments document / detail
    const appointments = await Appointment.find({
      _id: { $in: appointmentsIds },
    }).sort({ appointmentTime: 1 });

    // apply loop on it (appointments documents)
    // store patient's ids in Patient_idArr
    const patientIdsArr = [];

    appointments.map((item) => {
      patientIdsArr.push(item.patientId);
    });

    // get these patient's documents
    const patients = await Patient.find(
      {
        _id: { $in: patientIdsArr },
      },
      {
        firstName: 1,
        lastName: 1,
        birthDate: 1,
        disease: 1,
        fatherName: 1,
        age: 1,
        weight: 1,
      }
    );

    // Send the response
    res.status(201).json({
      message: "Dcotors appointments have displayed successfully!",
      appointments: appointments,
      patients,
      doctor,
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res
      .status(500)
      .json({ message: "Failed to display Dcotors  appointments." });
  }
};

export default getAppointmentsInfoByDoctorId;
