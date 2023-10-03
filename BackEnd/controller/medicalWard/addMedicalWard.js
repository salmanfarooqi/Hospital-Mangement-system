import MedicalWard from "../../database/medicalWard.js";
import Patient from "../../database/patient.js";
import Doctor from "../../database/doctor.js";
import Appointment from "../../database/appointment.js";

const addMedicalWard = async (req, res) => {
  try {
    //
    const {
      patientId,
      doctorId,
      appointmentId,
      patientName,
      patientFName,
      doctorName,
      emergencyMedicineName,
      emergencyMedicineDescription,
      date,
    } = req.body;

    // storing these variables in MedicalWardData varaible
    const MedicalWardData = {
      appointmentId,
      patientName,
      patientFName,
      doctorName,
      emergencyMedicineName,
      emergencyMedicineDescription,
      date,
    };

    // for notifications
    const notificationMessage =
      "Go to Medical ward for these Injections. Injection Name  : " +
      emergencyMedicineName +
      ", Injection Description : " +
      emergencyMedicineDescription;

    const notification = {
      message: notificationMessage,
      date: new Date().toISOString(),
    };

    //

    // creating new MedicalWard based on these values
    const AddedMedicalWardDocument = await MedicalWard.create(MedicalWardData);

    // adding id of MedicalWard document in Patient's MedicalWard Array
    const modifiedPatient = await Patient.updateOne(
      { _id: patientId },
      {
        $addToSet: { medicalWardArr: AddedMedicalWardDocument._id },
        $push: { notifications: notification },
      }
    );
    // adding id of MedicalWard document in Doctor's MedicalWard Array
    const modifiedDoctor = await Doctor.updateOne(
      { _id: doctorId },
      {
        $addToSet: { medicalWardArr: AddedMedicalWardDocument._id },
        $push: {
          notifications: {
            message: "No notification available.",
            date: new Date().toISOString(),
          },
        },
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

    // adding id of MedicalWard document in Appointment's MedicalWard Array
    const modifiedAppointment = await Appointment.updateOne(
      { _id: appointmentId },
      {
        $addToSet: { medicalWardArr: AddedMedicalWardDocument._id },
        $set: { status: "GoToMedicalWard" },
      }
    );

    // Send the response
    res.status(201).json({
      message: "MedicalWard has created successfully!",
      AddedMedicalWardDocument,
      modifiedPatient,
      modifiedDoctor,
      modifiedAppointment,
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ message: "Failed to create MedicalWard." });
  }
};

export default addMedicalWard;
