import express from "express";
import Pharmacy from "../database/pharmacy.js";
import Appointment from "../database/appointment.js";
import Patient from "../database/patient.js";

const app = express();

const pharmacyPendingStatus = async (req, res) => {
  try {
    const { _id, status } = req.body;

    const result = await Pharmacy.findByIdAndUpdate(
      { _id },
      {
        $set: {
          status: "completed",
        },
      },
      { returnDocument: true }
    );

    // storing data for further changes in other collections
    const { appointmentId, patientName, doctorName } = result;

    // changing appointment status to Completed
    const appointmentDocument = await Appointment.findOneAndUpdate(
      { _id: appointmentId },
      {
        $set: {
          status: "completed",
        },
      },
      { returnDocument: true }
    );

    // notification to patient
    const patientDocument = await Patient.findOneAndUpdate(
      { _id: appointmentDocument.patientId },
      {
        $push: {
          notifications: {
            message:
              "Your appointment has been completed. Follow your treatment & Take care of yourself.",
          },
        },
      }
    );
    // Send the response
    res.status(201).json({
      message: "pharmacy has updated successfully!",
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ message: "Failed to update pharmacy." });
  }
};

export default pharmacyPendingStatus;
