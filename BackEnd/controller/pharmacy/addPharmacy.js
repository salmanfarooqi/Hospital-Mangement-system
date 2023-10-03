import Pharmacy from "../../database/pharmacy.js";
import Patient from "../../database/patient.js";
import Doctor from "../../database/doctor.js";
import Appointment from "../../database/appointment.js";

const addPharmacy = async (req, res) => {
  try {
    //
    const {
      patientId,
      doctorId,
      appointmentId,
      patientName,
      patientFatherName,
      doctorName,
      medicineName,
      medicineQuantity,
      medicineDescription,
      date,
    } = req.body;

    // storing these variables in PharmacyData varaible
    const PharmacyData = {
      appointmentId,
      patientName,
      patientFatherName,
      doctorName,
      medicineName,
      medicineQuantity,
      medicineDescription,
      date,
    };

    // for notifications
    const notificationMessage =
      "Go to pharmacy to buy these medicines. Medicine Name : " +
      medicineName +
      ", quantity : " +
      medicineQuantity;

    const notification = {
      message: notificationMessage,
      date: new Date().toISOString(),
    };

    // creating new pharmacy based on these values
    const AddedPharmacyDocument = await Pharmacy.create(PharmacyData);

    // adding id of pharmacy document in Patient's pharmacy Array
    const modifiedPatient = await Patient.updateOne(
      { _id: patientId },
      {
        $addToSet: { pharmacyArr: AddedPharmacyDocument._id },
        $push: { notifications: notification },
      }
    );
    // adding id of pharmacy document in Doctor's pharmacy Array
    const modifiedDoctor = await Doctor.updateOne(
      { _id: doctorId },
      {
        $addToSet: { pharmacyArr: AddedPharmacyDocument._id },
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

    // adding id of pharmacy document in Appointment's pharmacy Array
    const modifiedAppointment = await Appointment.updateOne(
      { _id: appointmentId },
      {
        $addToSet: { pharmacyArr: AddedPharmacyDocument._id },
        $set: { status: "GoToPharmacy" },
      }
    );

    // Send the response
    res.status(201).json({
      message: "pharmacy has created successfully!",
      AddedPharmacyDocument,
      modifiedPatient,
      modifiedDoctor,
      modifiedAppointment,
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ message: "Failed to create pharmacy." });
  }
};

export default addPharmacy;
