import TestAddingCollection from "../../database/addTest.js";
import Patient from "../../database/patient.js";
import Doctor from "../../database/doctor.js";
import Appointment from "../../database/appointment.js";

const testAdd = async (req, res) => {
  try {
    //
    const {
      patientId,
      doctorId,
      appointmentId,
      patientName,
      patientFName,
      doctorName,
      testtype,
      testDetail,
      date,
    } = req.body;

    // storing these variables in TestData varaible
    const TestData = {
      appointmentId,
      patientName,
      patientFName,
      doctorName,
      testtype,
      testDetail,
      date,
    };

    // for notifications
    const notificationMessage =
      "Go to Test laboratory for these tests. Test Name  : " +
      testtype +
      ", Test Description : " +
      testDetail;

    const notification = {
      message: notificationMessage,
      date: new Date().toISOString(),
    };

    // creating new test based on these values
    const AddedTestDocument = await TestAddingCollection.create(TestData);

    // adding id of test document in Patient's test Array
    const modifiedPatient = await Patient.updateOne(
      { _id: patientId },
      {
        $addToSet: { testArr: AddedTestDocument._id },
        $push: { notifications: notification },
      }
    );
    // adding id of test document in Doctor's test Array
    const modifiedDoctor = await Doctor.updateOne(
      { _id: doctorId },
      {
        $addToSet: { testArr: AddedTestDocument._id },
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

    // adding id of test document in Appointment's test Array
    const modifiedAppointment = await Appointment.updateOne(
      { _id: appointmentId },
      {
        $addToSet: { testArr: AddedTestDocument._id },
        $set: { status: "GoToTestLaboratory" },
      }
    );

    // Send the response
    res.status(201).json({
      message: "Test has created successfully!",
      AddedTestDocument,
      modifiedPatient,
      modifiedDoctor,
      modifiedAppointment,
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ message: "Failed to create Test." });
  }
};

export default testAdd;
