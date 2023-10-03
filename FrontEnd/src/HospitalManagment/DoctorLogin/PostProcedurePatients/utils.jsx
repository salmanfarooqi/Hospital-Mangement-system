import axios from "axios";

// Handle Suggest test click
export const handleSuggestTestClick = async (
  e,
  test,
  testDescription,
  props
) => {
  // collecting Test related data from Patient's Appointment Object
  const appointmentId = e._id;
  const patientId = e.patientId._id;
  const doctorId = e.doctorId;
  const patientName = e.patientId.firstName + " " + e.patientId.lastName;
  const doctorName =
    props.allData.doctor.firstName + " " + props.allData.doctor.lastName;
  const patientFName = e.patientId.fatherName;
  // Collecting Suggesting test & test Description
  const testtype = test;
  const testDetail = testDescription;

  // Current Date
  const today = new Date();
  const date = `${today.getDate()}-${
    today.getMonth() + 1
  }-${today.getFullYear()}`;

  try {
    // writing test to patient (appointment)
    const resp = await axios.post("http://localhost:5000/testadd", {
      patientId,
      doctorId,
      appointmentId,
      patientName,
      patientFName,
      doctorName,
      testtype,
      testDetail,
      date,
    });

    // Updating all appointments
    props.allData.getDoctorInfo();
  } catch (error) {
    console.log("Error in Handle Suggest Treatment Click " + error);
  }
};

// Handle Suggest injection click
export const handleSuggestInjectionClick = async (
  e,
  injection,
  injectionDescription,
  props
) => {
  // collecting Injection related data from Patient's Appointment Object
  const appointmentId = e._id;
  const patientId = e.patientId._id;
  const doctorId = e.doctorId;
  const patientName = e.patientId.firstName + " " + e.patientId.lastName;
  const doctorName =
    props.allData.doctor.firstName + " " + props.allData.doctor.lastName;
  const patientFName = e.patientId.fatherName;
  // Collecting Suggesting injection & injection Description
  const emergencyMedicineName = injection;
  const emergencyMedicineDescription = injectionDescription;

  // Current Date
  const today = new Date();
  const date = `${today.getDate()}-${
    today.getMonth() + 1
  }-${today.getFullYear()}`;

  try {
    // writing injection to Patient's appointment
    const resp = await axios.post("http://localhost:5000/addmedicalward", {
      patientId,
      doctorId,
      appointmentId,
      patientName,
      patientFName,
      doctorName,
      emergencyMedicineName,
      emergencyMedicineDescription,
      date,
    });

    // Updating all appointments
    props.allData.getDoctorInfo();
  } catch (error) {
    console.log("Error in Handle Suggest Injection Click " + error);
  }
};

// Handle Suggest Blood click
export const handleSuggestBloodClick = async (
  e,
  bloodGroup,
  bloodQuantity,
  props,
  setBloodGroup,
  setBloodQuantity
) => {
  // collecting Blood related data from Patient's Appointment Object
  const appointmentId = e._id;
  const patientId = e.patientId._id;
  const doctorId = e.doctorId;
  const patientName = e.patientId.firstName + " " + e.patientId.lastName;
  const doctorName =
    props.allData.doctor.firstName + " " + props.allData.doctor.lastName;
  const patientFName = e.patientId.fatherName;

  // Current Date
  const today = new Date();
  const date = `${today.getDate()}-${
    today.getMonth() + 1
  }-${today.getFullYear()}`;

  try {
    // writing injection to Patient's appointment
    const resp = await axios.post("http://localhost:5000/addbloodward", {
      patientId,
      doctorId,
      appointmentId,
      patientName,
      patientFName,
      doctorName,
      bloodGroup,
      bloodQuantity,
      date,
    });

    // setting default values for blood
    setBloodGroup("A+");
    setBloodQuantity(1);

    // Updating all appointments
    props.allData.getDoctorInfo();
  } catch (error) {
    console.log("Error in Handle Suggest Blood Click " + error);
  }
};

// Handle Suggest Treatment, Medicine click
export const handleSuggestTreatmentClick = async (
  e,
  medicineName,
  medicineQuantity,
  medicineDescription,
  props
) => {
  // collecting Test related data from Patient's Appointment Object
  const appointmentId = e._id;
  const patientId = e.patientId._id;
  const doctorId = e.doctorId;
  const patientName = e.patientId.firstName + " " + e.patientId.lastName;
  const doctorName =
    props.allData.doctor.firstName + " " + props.allData.doctor.lastName;
  const patientFatherName = e.patientId.fatherName;

  // Current Date
  const today = new Date();
  const date = `${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`;

  try {
    // writing treatment to patient (appointment) & changing status
    const resp = await axios.post("http://localhost:5000/suggestpharmacy", {
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
    });

    // Updating all appointments
    props.allData.getDoctorInfo();
  } catch (error) {
    console.log("Error in Handle Suggest Treatment Click " + error);
  }
};
