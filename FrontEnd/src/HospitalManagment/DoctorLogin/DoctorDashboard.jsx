import TotalAppointment from "../patient/TotalAppointment";
import TotalPatient from "../patient/TotalPatient";
import AppointmentComplete from "../patient/AppointmentComplete";
import PatientReport from "./PatientReport";
import SuggestingTestOrTreatment from "./SuggestingTestOrTreatment";
import DoctorUpcomingAppointment from "./DoctorUpcomingAppointment";
import AppointmentRequest from "./AppointmentRequest";
import LatestNotifications from "./LatestNotifications";
import { useState, useEffect } from "react";
import axios from "axios";

import {
  addMinutes,
  tostring,
  formatTime,
} from "../PatientLogin/BookAppointment/utils";
import { Navigate } from "react-router-dom";

function DoctorDashboard() {
  /// Retrieve the user Id from localStorage
  const userId = localStorage.getItem("userId");
  const [notifications, setNotifications] = useState([]);
  const [requestAppointments, setRequestAppointments] = useState([]);
  const [upcomingAppointment, setUpcomingAppointment] = useState([]);
  const [waitingForTestAppointment, setWaitingForTestAppointment] = useState(
    []
  );
  const [waitingForTreatment, setWaitingForTreatment] = useState([]);
  // change in values, then update all
  const [changeInStates, setChangeInStates] = useState(false);

  // getting Doctor's information / detail from BackEnd & then separate them
  const getDoctorInfo = async () => {
    const resp = await axios.post(
      "http://localhost:5000/appointmentsinfobyDoctorid",
      {
        doctorId: userId,
      }
    );

    const appointments = resp.data.appointments;
    const patients = resp.data.patients;

    const doctorName =
      resp.data.doctor.firstName + " " + resp.data.doctor.lastName;

    //
    setNotifications(resp.data.doctor.notifications);

    // temporary variable to store data in it in loops after give data to useStates
    const requestAppointmentsTemp = [];
    const upcomingAppointmentTemp = [];
    const waitingForTestAppointmentTemp = [];
    const waitingForTreatmentTemp = [];

    /* patients.map((item) => {
      console.log("FirstName: " + item.firstName);
      console.log("LastName: " + item.lastName);
      console.log("Id: " + item._id);
    }); */

    // separarting appointments based on status
    appointments.map((item) => {
      const patient = patients.find((data) => data._id == item.patientId);

      // delete
      console.log("pat  " + JSON.stringify(patient));

      // Adding timeStart & timeEnd in am & pm format time
      const appointmentTime = new Date(item.appointmentTime);

      // adding doctor name to each appointment

      const timeStartTemp =
        tostring(appointmentTime.getUTCHours()) +
        ":" +
        tostring(appointmentTime.getUTCMinutes());
      const timeStart = formatTime(timeStartTemp);
      const timeEndTemp = addMinutes(timeStartTemp, item.duration);
      const timeEnd = formatTime(timeEndTemp);

      // Separating Appiontments based on status :- request, upcoming, finished , cancel
      if (item.status == 0) {
        requestAppointmentsTemp.push({
          ...patient,
          ...item,
          timeStart,
          timeEnd,
          appointmentTime,
          doctorName,
        });
      } else if (item.status == 1) {
        upcomingAppointmentTemp.push({
          ...patient,
          ...item,
          timeStart,
          timeEnd,
          appointmentTime,
          doctorName,
        });
      } else if (item.status == 2) {
        waitingForTestAppointmentTemp.push({
          ...patient,
          ...item,
          timeStart,
          timeEnd,
          appointmentTime,
          doctorName,
        });
      } else if (item.status == 4) {
        waitingForTreatmentTemp.push({
          ...patient,
          ...item,
          timeStart,
          timeEnd,
          appointmentTime,
          doctorName,
        });
      }

      // here item (appointment) is second because _id is common
      // in both patient & appiontment & one will get lost(which one is first) , so we want appointment id here
      // that's why we wrote this second.
    });

    // storing in useState
    setUpcomingAppointment([...upcomingAppointmentTemp]);

    //
    setRequestAppointments([...requestAppointmentsTemp]);

    //
    setWaitingForTestAppointment([{ ...waitingForTestAppointmentTemp[0] }]);

    //
    setWaitingForTreatment([{ ...waitingForTreatmentTemp[0] }]);
  };
  // getDoctorInfo ends here

  // removing current finished appointment from Upcoming appointments
  useEffect(() => {
    // check appointments after every one minute
    const interval = setInterval(async () => {
      // remove appointment from upcoming appointment if its time is equal or greater from current time
      if (upcomingAppointment[0]) {
        // time of upcoming appointment
        const upcomingAppointmentTimeTemp = new Date(
          upcomingAppointment[0].appointmentTime
        );

        // appointment time from backEnd is converted to Date formate
        let upcomingAppointmentTime = new Date(
          upcomingAppointmentTimeTemp.getUTCFullYear() +
            "-" +
            tostring(upcomingAppointmentTimeTemp.getUTCMonth() + 1) +
            "-" +
            tostring(upcomingAppointmentTimeTemp.getUTCDate()) +
            "T" +
            tostring(upcomingAppointmentTimeTemp.getUTCHours()) +
            ":" +
            tostring(upcomingAppointmentTimeTemp.getUTCMinutes()) +
            ":00.000+05:00" // +05:00 is used for GMT +05:00 , if we don't write this then it will give time 5 hours greater
        );

        //  if there is any appointment in upcoming appointment then check for removing
        if (upcomingAppointmentTime) {
          // converting to Iso string formate
          upcomingAppointmentTime = upcomingAppointmentTime.toISOString();

          // converting to Date GMT formate
          upcomingAppointmentTime = new Date(upcomingAppointmentTime);

          // current time
          const currentTime = new Date();

          // console.log("upcomingApt: " + upcomingAppointmentTime);
          // console.log("curTime: " + currentTime);

          try {
            // if current time is equal or greater than upcoming appointment
            // then remove it from upcoming appointment
            if (currentTime >= upcomingAppointmentTime) {
              const appointmentId = upcomingAppointment[0]._id;
              const changeStatus = 2;
              // status 2 means waiting for Lab test suggestion

              // remove this appointment from upcoming appointments
              const removeAppointmentFromUpcoming = await axios.put(
                "http://localhost:5000/changeappointmentstatus",
                { appointmentId, changeStatus }
              );

              // remove this appointment from upcoming appiontments
              // setUpcomingAppointment((prevArray) => prevArray.slice(1));
              // setMyArray(prevArray => prevArray.slice(1));

              // getAppointments update all appointments
              getDoctorInfo();
              // setChangeInStates(Math.random());
            }
          } catch (error) {
            console.log(
              "Error in setInterval upcoming appointment time checking equal or greater function" +
                error
            );
          }
        }
      }
    }, 10000);
    // Check the time after every 1 minute.

    return () => {
      clearInterval(interval);
    };
  }, [upcomingAppointment]);

  // for child components
  const allData = {
    requestAppointments,
    upcomingAppointment,
    waitingForTestAppointment,
    waitingForTreatment,
    changeInStates,
    setChangeInStates,
    getDoctorInfo,
  };

  // Get Doctor's information / detail from BackEnd. Execute only at startup
  useEffect(() => {
    getDoctorInfo();
  }, [changeInStates]);

  // Get Doctor's information / detail from BackEnd. Execute only when change in appointments happens
  return (
    <>
      <div className="container flex place-content-between min-w-[82vw]">
        <div className="main-content min-w-[61vw]">
          {/* <div className=" flex ml-6 bg">
              <TotalPatient />
              <TotalAppointment />
              <AppointmentComplete />
            </div>
             */}

          <div className="flex-col mr-2   ">
            <SuggestingTestOrTreatment allData={allData} />
            {/* <PatientReport allData={allData} /> */}
            <LatestNotifications notifications={notifications} />
          </div>
        </div>

        <div className="sideBar-left h-[569px] min-w-[20vw]  shadow-xl     bg-gray-50">
          <DoctorUpcomingAppointment allData={allData} />

          <AppointmentRequest allData={allData} />
        </div>
      </div>
    </>
  );
}
export default DoctorDashboard;
