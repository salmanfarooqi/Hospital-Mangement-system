import express from "express";
import TestAddingCollection from "../database/addTest.js";
import Appointment from "../database/appointment.js";
import Patient from "../database/patient.js";
import Doctor from "../database/doctor.js";

const app = express();

export const testprocessstatusUpdate = async (req, res) => {
  try {
    const { _id, status } = req.body;
    const result = await TestAddingCollection.findByIdAndUpdate(
      { _id },
      {
        $set: {
          status: "completed",
        },
      }
    );

    // storing data for further changes in other collections
    const { appointmentId, patientName, doctorName } = result;

    // changing appointment status to Completed
    const appointmentDocument = await Appointment.findOneAndUpdate(
      { _id: appointmentId },
      {
        $set: {
          status: "returnToDoctor",
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
            message: "Meet with Dr." + doctorName,
          },
        },
      },
      { returnDocument: true }
    );

    // notification to doctor
    const doctorDocument = await Doctor.findOneAndUpdate(
      { _id: appointmentDocument.doctorId },
      {
        $push: {
          notifications: {
            message:
              "Test Report received of " +
              patientName +
              ". Check Reports in Post-Procedure Patient Page.",
          },
        },
      }
    );
    // Send the response
    res.status(201).json({
      message: "Test has updated successfully!",
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ message: "Failed to update Test." });
  }
};

export default testprocessstatusUpdate;
