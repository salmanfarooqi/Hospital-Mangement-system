import Appointment from "../../database/appointment.js";
import Patient from "../../database/patient.js";

const changeAppointmentStatus = async (req, res) => {
  try {
    const { appointmentId, changeStatus, treatment, test } = req.body;

    let appointmentDoc = null;
    // change Appointment Status to new Status
    // if there is no treatment then only change status
    if (!treatment && !test) {
      appointmentDoc = await Appointment.findOneAndUpdate(
        { _id: appointmentId },
        { $set: { status: changeStatus } }
      ).populate({ path: "doctorId" });

      // getting Patient Id
      const patientId = appointmentDoc.patientId;

      const doctorName =
        appointmentDoc.doctorId.firstName +
        " " +
        appointmentDoc.doctorId.lastName;

      // for notifications
      let notificationMessage = "";
      if (changeStatus == 1 || changeStatus == "cancel") {
        notificationMessage =
          "Your appointment is " +
          (changeStatus == 1 ? "accepted" : "rejected") +
          " by Dr. " +
          doctorName;
      } else if (changeStatus == 2) {
        notificationMessage =
          "Your appointment is started with Dr. " + doctorName;
      }

      // making notification object
      const notification = {
        message: notificationMessage,
        date: new Date(),
      };

      // adding notification in Patient's notification Array
      const modifiedPatient = await Patient.updateOne(
        { _id: patientId },
        {
          $push: { notifications: notification },
        }
      );
    } else if (treatment && !test) {
      // if there is treatment then change status & treatment
      appointmentDoc = await Appointment.updateOne(
        { _id: appointmentId },
        { $set: { status: changeStatus, treatment: treatment } }
      );
    } else if (test && !treatment) {
      // if there is treatment then change status & treatment
      appointmentDoc = await Appointment.updateOne(
        { _id: appointmentId },
        { $set: { status: changeStatus, test: test } }
      );
    }

    // Send the response
    res.status(201).json({
      message: "Appointment changed successfully!",
      appointmentDoc,
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ message: "Failed to change Appointment." });
  }
};

export default changeAppointmentStatus;
