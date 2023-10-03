import Doctor from "../../database/doctor.js";

const getDoctorDetails = async (req, res) => {
  /*
  get doctor's All Appointments which have Post Procedure status with doctor name & appointment time & other info
  */
  try {
    const doctorId = req.params.id;

    // getting doctor's Appointments Ids
    const doctor = await Doctor.findOne({ _id: doctorId })
      .populate({
        path: "appointment",
        // match: { status: 1 },
        options: { sort: { appointmentTime: 1 } },
        populate: {
          path: "patientId",
        },
      })
      .populate("specialization")
      .populate("pharmacyArr")
      .populate("bloodWardArr")
      .populate("medicalWardArr")
      .populate("testArr");
    // Send the response
    res.status(201).json({
      message: "Doctor details have displayed successfully!",
      doctor,
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ message: "Failed to display Doctor  details." });
  }
};

export default getDoctorDetails;
