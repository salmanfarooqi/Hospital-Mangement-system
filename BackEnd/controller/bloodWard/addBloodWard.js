import BloodWard from "../../database/bloodWard.js";
import Patient from "../../database/patient.js";
import Doctor from "../../database/doctor.js";
import Appointment from "../../database/appointment.js";

const addBloodWard = async (req, res) => {
  try {
    //
    const {
      patientId,
      doctorId,
      appointmentId,
      patientName,
      patientFName,
      doctorName,
      bloodGroup,
      bloodQuantity,
      date,
    } = req.body;

    // storing these variables in BloodWard Data varaible
    const BloodWardData = {
      appointmentId,
      patientName,
      patientFName,
      doctorName,
      bloodGroup,
      bloodQuantity,
      date,
    };

    // for notifications
    const notificationMessage =
      "Go to Blood ward for injecting blood. Blood Group : " +
      bloodGroup +
      ", quantity : " +
      bloodQuantity;

    const notification = {
      message: notificationMessage,
      date: new Date().toISOString(),
    };

    // creating new BloodWard based on these values
    const AddedBloodWardDocument = await BloodWard.create(BloodWardData);

    // adding id of BloodWard document in Patient's BloodWard Array
    const modifiedPatient = await Patient.updateOne(
      { _id: patientId },
      {
        $addToSet: { bloodWardArr: AddedBloodWardDocument._id },
        $push: { notifications: notification },
      }
    );

    // adding id of BloodWard document in Doctor's BloodWard Array
    const modifiedDoctor = await Doctor.updateOne(
      { _id: doctorId },
      {
        $addToSet: { bloodWardArr: AddedBloodWardDocument._id },
      }
    );

    // Find the doctor by their _id and update the last notification's "read" field
    await Doctor.findOneAndUpdate(
      { _id: doctorId },
      { $set: { "notifications.$[elem].read": true } },
      {
        arrayFilters: [{ "elem.read": false }],
        new: true,
      }
    );

    // adding id of BloodWard document in Appointment's BloodWard Array
    const modifiedAppointment = await Appointment.updateOne(
      { _id: appointmentId },
      {
        $addToSet: { bloodWardArr: AddedBloodWardDocument._id },
        $set: { status: "GoToBloodWard" },
      }
    );

    // Send the response
    res.status(201).json({
      message: "BloodWard has created successfully!",
      AddedBloodWardDocument,
      modifiedPatient,
      modifiedDoctor,
      modifiedAppointment,
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ message: "Failed to create BloodWard." });
  }
};

export default addBloodWard;
