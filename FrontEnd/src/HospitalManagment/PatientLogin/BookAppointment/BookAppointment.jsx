import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  tostring,
  addMinutes,
  formatTime,
  isDateDisabled,
  getDayClassName,
  disabledDates,
} from "./utils";

const BookAppointment = () => {
  const navigate = useNavigate();
  //
  const [oldAppointmentsTimeList, setOldAppointmentsTimeList] = useState([]);
  const [specializationsNames, setSpecializationsNames] = useState([]);
  const [specializationId, setSpecializationId] = useState(null);
  const [specializationType, setSpecializationType] = useState(null);
  /// Retrieve the user Id from localStorage
  const patientId = localStorage.getItem("userId");

  const [doctors, setDoctors] = useState([]);
  const [allDoctors, setAllDoctors] = useState([]);
  const [doctorId, setDoctorId] = useState(null);
  const [doctorName, setDoctorName] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [duration, setDuration] = useState(15);
  let durationTemp = 15;
  const [selectedSlot, setSelectedSlot] = useState(null);
  let newStart = tostring(8) + ":" + tostring(0);
  // // for storing appointmentsTimes on specific date only
  let specificDateAppointmentsTemp = [];
  const [specificDateAppointments, setSpecificDateAppointments] = useState([]);
  let availableSlotsArr = [];

  // get Doctors
  const getAllDoctors = async () => {
    const resp = await axios.get("http://localhost:5000/doctors");
    const allDoctorsTemp = resp.data;

    //
    setAllDoctors(allDoctorsTemp);
  };

  //  get Specialization names
  const getSpecializationNames = async () => {
    const specializationnames = await axios.get(
      "http://localhost:5000/specializationsnames"
    );
    setSpecializationsNames(specializationnames.data.specializationNames);
  };

  // run only once at startup and get Specialization names
  useEffect(() => {
    getSpecializationNames();
    getAllDoctors();
  }, []);

  const getAppointments = async () => {
    try {
      const res = await axios.post("http://localhost:5000/appointmentsbyids", {
        patientId,
        doctorId,
      });
      setOldAppointmentsTimeList(res.data.appointments);
    } catch (error) {
      console.log("Erorr in getAppointments function.");
      console.log(error);
    }
  };

  // Handle form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Handle Specialization Name Select
  const handleSpecializationName = (e) => {
    setSpecializationId(e.target.value);

    setAvailableSlots([]);
  };

  // When user clicks on disabled date show it is already booked
  const handleDateChange = (date) => {
    // checking whether doctor was selected or not
    if (doctorName == null) {
      alert("Select Doctor First !");
      return;
    }
    if (!isDateDisabled(date)) {
      alert("This date is already booked !");
    } else if (date < new Date().getDate()) {
      alert("You cannot select past dates");
    } else {
      // for storing appointmentsTimes on specific date only
      specificDateAppointmentsTemp = [];

      // Remove the other dates appointments , if there are any.
      availableSlotsArr = [];
      // storing the seleting date
      setSelectedDate(date);

      // retreiving seleted date's appointmentTimes only
      oldAppointmentsTimeList.map((item) => {
        const time = new Date(item.appointmentTime);

        if (
          time.getYear() == date.getYear() &&
          time.getMonth() == date.getMonth() &&
          time.getDate() == date.getDate()
        ) {
          // storing seleted date's appointmentTimes only
          specificDateAppointmentsTemp.push(item);
        }
      });

      // add to usestate specificDateAppointmentsTemp specificDateAppointments
      setSpecificDateAppointments([...specificDateAppointmentsTemp]);
    }
    // if else ends here
  };

  // HandleDateChange ends here

  // Handle Available Slot click
  const handleAvailableSlot = (time) => {
    // checking whether doctor was selected or not
    if (doctorName == null) {
      alert("Select Doctor First !");
      return 0;
    } else if (selectedDate == null) {
      alert("Select Date First !");
      return 0;
    }
    setSelectedSlot(time.target.value);
  };

  // Handle Duration Select
  const handleDurationSelect = (e) => {
    // checking whether doctor was selected or not
    if (doctorName == null) {
      alert("Select Doctor First !");
      return 0;
    } else if (selectedDate == null) {
      alert("Select Date First !");
      return 0;
    }

    durationTemp = parseInt(e.target.value);

    // Calculating Available time slots in this specific date
    while (true) {
      // making start & end time .e.g. 08:00 - 08:30
      const newEnd = addMinutes(newStart, durationTemp);

      // finding whether this slot is available or booked
      let available = true;

      // if there are upcoming appointments in selected date
      // checking available slots in selected date
      specificDateAppointments.map((item) => {
        // Booked appointment
        const oldAppointmentTime = new Date(item.appointmentTime);
        // saving in this format "08:00"
        const oldStart =
          tostring(oldAppointmentTime.getUTCHours()) +
          ":" +
          tostring(oldAppointmentTime.getUTCMinutes());

        // making start & end time .e.g. 08:00 - 08:30
        const oldEnd = addMinutes(oldStart, item.duration);

        // found booked slot
        if (
          oldStart == newStart ||
          (oldStart <= newStart && newStart < oldEnd) ||
          (newStart <= oldStart && oldStart < newEnd)
        ) {
          // this time is booked
          available = false;
        }

        // delete testing
        console.log("old start " + oldStart);
        console.log("old End " + oldEnd);
      });

      // show whether this slot is available or booked
      const todayDate = new Date();
      if (
        todayDate.getUTCDate() == selectedDate.getUTCDate() &&
        todayDate.getUTCMonth() == selectedDate.getUTCMonth() &&
        todayDate.getUTCFullYear() == selectedDate.getUTCFullYear()
      ) {
        let currentTime =
          tostring(todayDate.getHours()) +
          ":" +
          tostring(todayDate.getMinutes());

        //   newStart <= currentTime < newEnd = 10:00 <= 10:24 < 10:30
        // OR
        // newEnd >= currentTime = 10:30 >= 10:24
        // 11:40 -12:00 , 12:00
        if (
          (newStart <= currentTime && currentTime < newEnd) ||
          newEnd > currentTime
        ) {
          // show whether this slot is available or booked
          if (available) {
            availableSlotsArr.push({ newStart, newEnd });
          }
        }
      } else {
        // show whether this slot is available or booked
        if (available) {
          availableSlotsArr.push({ newStart, newEnd });
        }
      }

      //  add minutes to varaible
      newStart = addMinutes(newStart, durationTemp);

      // break loop when 6 pm or 18 hr occurs
      if (newStart >= "18:00") {
        // console.log("loop is break due to 18:00");
        break;
      }
    }
    // here save the available slots from variables arr to useState arr
    setAvailableSlots([...availableSlotsArr]);

    //  Set the duration
    setDuration(e.target.value);
  };

  // Handle Add Appointment Button
  const handleAddAppointment = async () => {
    // checking whether doctor was selected or not
    if (doctorName == null) {
      alert("Select Doctor First !");
      return 0;
    } else if (selectedDate == null) {
      alert("Select Date First !");
      return 0;
    } else if (selectedSlot == null) {
      alert("Select Available Time First !");
      return 0;
    }

    // 2023-05-05T18:00:00.000+00:00
    const appointmentNewTime =
      selectedDate.getFullYear() +
      "-" +
      tostring(selectedDate.getMonth() + 1) +
      "-" +
      tostring(selectedDate.getDate()) +
      "T" +
      selectedSlot +
      ":00.000+00:00";

    const createdAppointment = await axios.post(
      "http://localhost:5000/appointment",
      {
        doctorId: doctorId,
        patientId: patientId,
        appointmentTime: appointmentNewTime,
        duration: duration,
        status: 0,
      }
    );

    toast.success("Appointment has Created Successfully.", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    // Wait for 2 seconds to display message
    setTimeout(() => {
      navigate("/patient/dashboard");
    }, 2000);
  };

  // Get Doctors from BackEnd
  const getDoctors = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/doctorsbyspecialization",
        { _id: specializationId }
      );

      setDoctors(res.data.doctors);
    } catch (err) {
      console.log("Error in getDoctor" + err);
    }
  };

  // Get Specialization Names when patient selects specialization Name
  useEffect(() => {
    getDoctors();
  }, [specializationId]);

  // Get Doctors when patient selects a Doctor
  useEffect(() => {
    getAppointments();
  }, [doctorId]);

  return (
    <>
      <ToastContainer />
      <div className="mx-[150px] w-[60vw]">
        {/* Heading of Appointment Booking */}
        <div
          className="heading-bookingAppointment card-header bg-gradient-primary text-white p-7 mb-6 flex place-content-center items-center "
          style={{ height: "60px" }}
        >
          <h4 className="font-bold font-weight-bolder text-white text-center text-2xl">
            Book Appointment
          </h4>
        </div>
        <div>
          {/* Taking Data from Patient */}
          <form action="" onSubmit={handleSubmit}>
            {/* Writing Syptoms or other Problem */}
            {/* 
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Write your problem & syptoms here...,"
            className="form-control mb-3 p-2"
          />
           */}

            {/* Choose search type */}
            <select
              name="searchType"
              className="form-control mb-3 p-2"
              id="searchType"
              onChange={(e) => {
                if (e.target.value) {
                  setSpecializationType(e.target.value);
                } else {
                  setSpecializationType(null);
                }
              }}
            >
              <option value="">Select Specialization type</option>
              <option value="byName">Search Doctor by Name</option>
              <option value="bySpecialization">
                Search Doctor by Specialization
              </option>
            </select>

            {/* Search by specialization */}
            {specializationType == "bySpecialization" ? (
              <>
                {/* Select a Specialization  */}
                <select
                  name="specialization"
                  id="specialization"
                  className="form-control mb-3 p-2"
                  onChange={handleSpecializationName}
                >
                  <option value="">Select Any Specialization</option>
                  {specializationsNames.map((item, index) => {
                    return (
                      <option value={item._id} key={index}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>

                {/* Select a Doctor from only a specific specialization*/}
                <select
                  name="doctors"
                  id="doctors"
                  className="form-control mb-3 p-2"
                  onChange={(e) => {
                    const selectedDoctor = doctors.find(
                      (doctor) => doctor._id === e.target.value
                    );

                    if (selectedDoctor && "_id" in selectedDoctor) {
                      setDoctorId(selectedDoctor._id);
                      setDoctorName(
                        selectedDoctor.firstName + " " + selectedDoctor.lastName
                      );
                    } else {
                      setDoctorId(null);
                      setDoctorName(null);
                      setAvailableSlots([]);
                    }
                  }}
                >
                  <option value="">Select Any Doctor</option>
                  {doctors.map((item, index) => {
                    return (
                      <option value={item._id} key={index}>
                        {item.firstName + " " + item.lastName}
                      </option>
                    );
                  })}
                </select>

                {/* selecting doctor but on another design & method, without Select tag
          <div className="Doctors-Container">
            {doctorName ? (
              <div>
                <h3 className="flex place-content-center">
                  Your selected doctor :{" "}
                  <span className="font-bold "> {doctorName}</span>
                </h3>
                <button
                  onClick={() => {
                    setDoctorId(null);
                    setDoctorName(null);
                    setAvailableSlots([]);
                  }}
                  className="form-control mb-3 p-2 mt-3 "
                >
                  Cancel
                </button>
              </div>
            ) : (
              <>
                <div className="Doctors flex">
                  {doctors.map((item, index) => {
                    return (
                      <div
                        className="p-4"
                        onClick={() => {
                          setDoctorId(item._id);
                          setDoctorName(item.firstName + " " + item.lastName);
                        }}
                        key={index}
                      >
                        {item.firstName + " " + item.lastName}
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
           */}
              </>
            ) : (
              ""
            )}

            {/*  */}
            {specializationType == "byName" ? (
              <>
                {/* Select a Doctor from all doctors*/}
                <select
                  name="doctors"
                  id="doctors"
                  className="form-control mb-3 p-2"
                  onChange={(e) => {
                    const selectedDoctor = allDoctors.find(
                      (doctor) => doctor._id === e.target.value
                    );

                    if (selectedDoctor && "_id" in selectedDoctor) {
                      setDoctorId(selectedDoctor._id);
                      setDoctorName(
                        selectedDoctor.firstName + " " + selectedDoctor.lastName
                      );
                    } else {
                      setDoctorId(null);
                      setDoctorName(null);
                      setAvailableSlots([]);
                    }
                  }}
                >
                  <option value="">Select Any Doctor</option>
                  {allDoctors.map((item, index) => {
                    return (
                      <option value={item._id} key={index}>
                        {item.firstName + " " + item.lastName}
                      </option>
                    );
                  })}
                </select>
              </>
            ) : (
              ""
            )}

            {/* fields after Date */}
            {specializationType ? (
              <>
                {/* Select A Day by Calendar */}
                <div className="Date">
                  <h2>Select a Date:</h2>
                  <DatePicker
                    className="form-control mb-3 p-2 "
                    selected={selectedDate}
                    onChange={handleDateChange}
                    minDate={new Date()}
                    dateFormat="d MMMM , yyyy"
                    // dayClassName={getDayClassName}
                    placeholderText="Select an Available Date"
                    todayButton="Today"
                  />
                </div>

                {/* Date for Salman Farooqi */}
                {/* <input
                  type="date"
                  name=""
                  id=""
                  // selected={selectedDate}
                  onChange={handleDateChange}
                  min={new Date()}
                /> */}

                {/* Select Appointment Duration */}
                <div className="duration mt-3">
                  <select
                    className="form-control mb-3 p-2"
                    name="duration"
                    id="duration"
                    onChange={handleDurationSelect}
                  >
                    <option value="">Select Time Duration</option>
                    <option value="15">15 Mins</option>
                    <option value="20">20 Mins</option>
                    <option value="30">30 Mins</option>
                  </select>
                </div>

                {/* Select time in available Time Slots */}
                <div className="Time">
                  <h3>Select from time Available slots:</h3>
                  <select
                    name=""
                    id=""
                    onChange={handleAvailableSlot}
                    className="form-control mb-3 p-2"
                  >
                    <option value="Select Any Available Time">
                      Select Any Available Time
                    </option>
                    {availableSlots.map((item, index) => {
                      return (
                        <option value={item.newStart} key={index}>
                          {formatTime(item.newStart)} -{" "}
                          {formatTime(item.newEnd)}
                        </option>
                      );
                    })}
                  </select>
                  {/* Showing You selected this Time Slot*/}
                  {selectedSlot ? (
                    <h3>You selected {formatTime(selectedSlot)} time.</h3>
                  ) : (
                    ""
                  )}
                </div>

                {/* Add Appointment Button */}
                <button
                  className="form-control mb-3 p-2"
                  onClick={handleAddAppointment}
                >
                  Add Appointment
                </button>
              </>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default BookAppointment;
