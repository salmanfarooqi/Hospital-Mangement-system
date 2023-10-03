import YourDoctor from "./YourDoctor";
import PatientData from "./PatientData";
import PatientReportDisplay from "./PatientReportDisplay";
import PatientupComingAppointment from "./PatientupComingAppointment";

import LatestNotifications from "./LatestNotifications";
import { tostring } from "../PatientLogin/BookAppointment/utils";

import { useState, useEffect } from "react";
import axios from "axios";

function PatientDashboard() {
  /// Retrieve the user Id from localStorage
  const userId = localStorage.getItem("userId");
  const [patientDetail, setPatientDetail] = useState(null);
  const [appointments, setAppointments] = useState([]);

  // getting patient's information / detail from BackEnd & then separate them
  const getPatientInfo = async () => {
    const resp = await axios.get(
      "http://localhost:5000/patientdetail/" + userId
    );

    const patientDetailTemp = resp.data.patient;

    // getting only upcoming appointments from all appointments
    const upcomingAppointments = [];

    patientDetailTemp.appointment.map((item) => {
      if (item.status == 1) {
        upcomingAppointments.push(item);
      }
    });

    setPatientDetail(patientDetailTemp);

    //
    setAppointments([...upcomingAppointments]);
  };
  // getPatientInfo ends here

  // for child components
  const allData = {
    appointments,
    patientDetail,
    getPatientInfo,
  };

  // Get patient's information / detail from BackEnd. Execute only at startup
  useEffect(() => {
    getPatientInfo();

    return () => {};
  }, []);

  // removing current finished appointment from Upcoming appointments
  useEffect(() => {
    // check appointments after every one minute
    const interval = setInterval(async () => {
      // remove appointment from upcoming appointment if its time is equal or greater from current time
      if (appointments[0]) {
        // time of upcoming appointment
        const upcomingAppointmentTimeTemp = new Date(
          appointments[0].appointmentTime
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
              const appointmentId = appointments[0]._id;
              const changeStatus = 2;
              // status 2 means waiting for Lab test suggestion

              // remove this appointment from upcoming appointments
              const removeAppointmentFromUpcoming = await axios.put(
                "http://localhost:5000/changeappointmentstatus",
                { appointmentId, changeStatus }
              );

              // getAppointments update all appointments
              getPatientInfo();
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
  }, [appointments]);

  return (
    <>
      <div className="container flex place-content-between min-w-[81vw]">
        <div className="relative main-content min-w-[60vw]">
          <div className="Latest Notifications">
            <LatestNotifications allData={allData} />
          </div>
          <div className=" ">
            {/* <YourDoctor /> */}
            <PatientData allData={allData} />
          </div>

          {/* <div className="flex mt-4 h-[320px] w-[780px] ml-6 bg-green-200 shadow-sm shadow-green-500">
            <PatientReportDisplay />
          </div> */}
        </div>
        <div className="sideBar-left  min-w-[20vw]  shadow-xl bg-gray-50">
          <PatientupComingAppointment allData={allData} />
        </div>
      </div>
      {/*  */}
    </>
  );
}
export default PatientDashboard;
