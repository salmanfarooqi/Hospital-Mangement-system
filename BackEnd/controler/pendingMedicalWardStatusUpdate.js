import express from "express";
import MedicalWard from "../database/medicalWard.js";
import Appointment from "../database/appointment.js";
import Patient from "../database/patient.js";
import Doctor from "../database/doctor.js";

const app = express();

export const pendingMedicalWardStatusUpdate = async (req, res) => {
  try {
    const { _id } = req.body;
    const result = await MedicalWard.findByIdAndUpdate(
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
    /*
    const doctorDocument = await Doctor.findOneAndUpdate(
      { _id: appointmentDocument.doctorId },
      {
        $push: {
          notifications: {
            message: "Test Report received of " + patientName,
          },
        },
      }
    );
    */

    // Send the response
    res.status(201).json({
      message: "Medical ward has updated successfully!",
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ message: "Failed to update Medical ward." });
  }
};

export default pendingMedicalWardStatusUpdate;
