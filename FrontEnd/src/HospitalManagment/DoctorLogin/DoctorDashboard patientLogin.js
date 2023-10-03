import TotalAppointment from "../patient/TotalAppointment";
import TotalPatient from "../patient/TotalPatient";
import PatientReport from "../patient/PatientReport";
import AppointmentComplete from "../patient/AppointmentComplete";
import DoctorUpcomingAppointment from "./DoctorUpcomingAppointment";
import AppointmentRequest from "./AppointmentRequest";
import { useState, useEffect } from "react";
import axios from "axios";

function DoctorDashboard(props) {
  const [patientId, setPatientId] = useState("643da616b531de23f93622b1");

  // SideBar
  props.data("Patient");

  // getting Patient's information / detail from BackEnd
  const getPatientInfo = async () => {
    const resp = await axios.post(
      "http://localhost:5000/appointmentsinfobypatientid",
      {
        patientId,
      }
    );

    const appointments = resp.data.appointments;

    const doctors = resp.data.doctors;

    /* patients.map((item) => {
      console.log("FirstName: " + item.firstName);
      console.log("LastName: " + item.lastName);
      console.log("Id: " + item._id);
    }); */

    // showing appointment time & ptient name
    appointments.map((item) => {
      const patient = patients.find((data) => data._id == item.patientId);
      console.log("Patient Name : " + patient.firstName);

      console.log("Appointment Time: " + item.appointmentTime);
    });
  };

  // Get Doctor's information / detail from BackEnd. Execute only at startup
  useEffect(() => {
    getDoctorInfo();
  }, []);

  return (
    <>
      <div className="container flex">
        <div className="relative main-content">
          <div className=" flex ml-6 bg">
            <TotalPatient />
            <TotalAppointment />
            <AppointmentComplete />
          </div>

          <div className="flex mt-4 h-[1320px] w-[780px] ml-6 bg-green-200 shadow-sm shadow-green-500">
            <PatientReport />
          </div>
        </div>
        <div className="sideBar-left w-72 bg-gray-200 shadow-sm orange-yellow-500 px-8 py-2 mx-4 my-2">
          <DoctorUpcomingAppointment />

          <AppointmentRequest />
        </div>
      </div>
    </>
  );
}
export default DoctorDashboard;
