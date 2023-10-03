import Doctor from "../../database/doctor.js";

const getPostPatientAppointments = async (req, res) => {
  /*
  get doctor's All Appointments which have Post Procedure status with Patient name & appointment time & other info
  */
  try {
    const doctorId = req.params.id;

    // getting Doctor's Appointments Ids
    const doctor = await Doctor.findOne(
      { _id: doctorId },
      {
        appointment: 1,
        firstName: 1,
        lastName: 1,
      }
    ).populate({
      path: "appointment",
      match: { status: "returnToDoctor" },
      populate: {
        path: "patientId testArr medicalWardArr bloodWardArr",
      },
    });

    // Send the response
    res.status(201).json({
      message: "Dcotors appointments have displayed successfully!",
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

export default getPostPatientAppointments;
