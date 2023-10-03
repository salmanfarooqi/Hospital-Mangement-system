import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Salman Farooqi's

import Blood from "./HospitalManagment/Blood/Blood";
import Doctor from "./HospitalManagment/doctor/Doctor";
import RemaningBloodRecord from "./HospitalManagment/Blood/RemaningBloodRecord";
import TotalTestTodayRecord from "./HospitalManagment/Lab/TotalTestTodayRecord";
import TotalUltrasoundRecord from "./HospitalManagment/Lab/TotalUltrasoundRecord";
import Phar from "./HospitalManagment/pharmacy/Phar";
import TotalTestRecord from "./HospitalManagment/Lab/TotalTestRecord";
import TotalXraysRecord from "./HospitalManagment/Lab/TotalXraysRecord";
import TotalBloodRecord from "./HospitalManagment/Blood/TotalBloodRecord";
import Nurse from "./HospitalManagment/Nurse/Nurse";
import Dashboardcontent from "./HospitalManagment/Dashboardcontent/Dashboardcontent";
import Lab from "./HospitalManagment/Lab/Lab";
import Patient from "./HospitalManagment/patient/Patient";
import DashboardTestRecord from "./HospitalManagment/Dashboardcontent/DashboardTestRecord";
import DashbordMedicineRecord from "./HospitalManagment/Dashboardcontent/DashbordMedicineRecord";
import DashbordPatientRecord from "./HospitalManagment/Dashboardcontent/DashbordPatientRecord";
import DashbordNurseRecord from "./HospitalManagment/Dashboardcontent/DashboardNurseRecord";
import DoctorAbsentRecord from "./HospitalManagment/doctor/DoctorAbsentRecord";
import DoctorLeaveRecord from "./HospitalManagment/doctor/DoctorLeaveRecord";
import DoctorTotalRecord from "./HospitalManagment/doctor/DoctorTotalRecord";
import NurseAbsentRecord from "./HospitalManagment/Nurse/NurseAbsentRecord";
import NurseLeaveRecord from "./HospitalManagment/Nurse/NurseLeaveRecord";
import NurseTotalRecord from "./HospitalManagment/Nurse/NurseTotalRecord";
import AddingDoctor from "./HospitalManagment/doctor/AddingDoctor";
import AddingTest from "./HospitalManagment/LabComponent/AddingTest";
import Pharmacy from "./HospitalManagment/PharmacyComponent/Pharmacy";
import BloodComponent from "./HospitalManagment/BloodComponent/BloodComponent";
import AddingBlood from "./HospitalManagment/BloodComponent/AddingBlood";
import LabComponent from "./HospitalManagment/LabComponent/LabComponent";
import Addmedicine from "./HospitalManagment/PharmacyComponent/Addmedicine";
import AddingNurse from "./HospitalManagment/Nurse/AddingNurse";
import Atendence from "./HospitalManagment/attendence/Atendence";
import TakeAttendence from "./HospitalManagment/attendence/TakeAttendence";
import PendingTestRecord from "./HospitalManagment/LabComponent/pendingTestRecord";
import ProcessTestRecord from "./HospitalManagment/LabComponent/processTestRecord";
import PendingMedinceRecord from "./HospitalManagment/PharmacyComponent/PendingMedicineRecord";
import SoldMedicineRecord from "./HospitalManagment/PharmacyComponent/SoldMedicineRecord";
import MedicalWardMainPage from "./HospitalManagment/MedicalWard/MedicalWardMainPage";
import PendingMedicalWardRecord from "./HospitalManagment/MedicalWard/PendingMedicalWardRecord";
import TotalMedicalWardMedicineRecord from "./HospitalManagment/MedicalWard/TotalMedicalWardMedicineRecord";
import TotalPatientRecord from "./HospitalManagment/patient/TotalPatientRecord";
import BloodTestRecord from "./HospitalManagment/Lab/BloodTestRecord";
import TotalMedicineRecord from "./HospitalManagment/pharmacy/TotalMedicineRecord";
import TotalMedicineHistoryRecord from "./HospitalManagment/pharmacy/TotalMedicineHistoryRecord";
import AdminWebsite from "./HospitalManagment/Dashboardcontent/AdminWebsite";
import Empity from "./HospitalManagment/Empity/Empity";
import AttendenceHistoryRecord from "./HospitalManagment/attendence/AttendenceHistoryRecord";
import AttendenceHistory from "./HospitalManagment/attendence/AttendenceHistory";
import AttendenceReportRecord from "./HospitalManagment/attendence/AttendenceReportRecord";
import PendingBloodRecord from "./HospitalManagment/BloodComponent/PendingBloodRecord";
import TakingAttendence from "./HospitalManagment/attendence/TakingAttendence";
import TakeAttendance from "./HospitalManagment/attendence/TakeAttendence";
import TotalBloodRecords from "./HospitalManagment/BloodComponent/TotalBloodRecords";
import TotalMedicineRecords from "./HospitalManagment/PharmacyComponent/TotalMedicineRecords";
import TotalTestTodayRecords from "./HospitalManagment/LabComponent/TotalTestTodayRecords";
import SoldMedicineRecords from "./HospitalManagment/pharmacy/SoldMedicineRecords";

// Abbas
import DoctorDashboard from "./HospitalManagment/DoctorLogin/DoctorDashboard";
import PatientDashboard from "./HospitalManagment/PatientLogin/PatientDashboard";
import BookAppointment from "./HospitalManagment/PatientLogin/BookAppointment/BookAppointment";
import PostProcedurePatients from "./HospitalManagment/DoctorLogin/PostProcedurePatients/PostProcedurePatients";
import AppointmentHistory from "./HospitalManagment/PatientLogin/AppointmentHistory";
import PharmacyHistory from "./HospitalManagment/PatientLogin/PharmacyHistory";
import BloodHistory from "./HospitalManagment/PatientLogin/BloodHistory";
import LaboratoryHistory from "./HospitalManagment/PatientLogin/LaboratoryHistory";
import MedicalWardHistory from "./HospitalManagment/PatientLogin/MedicalWardHistory";
import DoctorAppointmentHistory from "./HospitalManagment/DoctorLogin/AppointmentHistory";
import DoctorBloodHistory from "./HospitalManagment/DoctorLogin/BloodHistory";
import DoctorLaboratoryHistory from "./HospitalManagment/DoctorLogin/LaboratoryHistory";
import DoctorMedicalWardHistory from "./HospitalManagment/DoctorLogin/MedicalWardHistory";
import DoctorPharmacyHistory from "./HospitalManagment/DoctorLogin/PharmacyHistory";
import PatientProfile from "./HospitalManagment/PatientLogin/PatientProfile";
import DoctorProfile from "./HospitalManagment/DoctorLogin/DoctorProfile";
import DoctorWebsite from "./HospitalManagment/DoctorLogin/DoctorWebsite";

import DoctorUpdate from "./HospitalManagment/DoctorLogin/DoctorUpdate";
import DoctorAllNotifications from "./HospitalManagment/DoctorLogin/DoctorAllNotifications";
import PatientAllNotifications from "./HospitalManagment/PatientLogin/PatientAllNotifications";
import PatientUpdate from "./HospitalManagment/PatientLogin/PatientUpdate";
import PatientWebsite from "./HospitalManagment/PatientLogin/PatientWebsite";
import Login from "./HospitalManagment/login/Login";
import DoctorSignup from "./HospitalManagment/signup/DoctorSignup";
import PatientSignup from "./HospitalManagment/signup/PatientSignup";
import NotFound from "./HospitalManagment/NotFound/NotFound";

import { useState, useEffect } from "react";

function RoutesComponent() {
  const [userId, setUserId] = useState("");
  const [userRole, setUserRole] = useState("");
  const [loadingComplete, setLoadingComplete] = useState(false);
  const userData = { setUserId, setUserRole };

  useEffect(() => {
    // Retrieve the user Id & role from local/Storage
    const userIdTemp = localStorage.getItem("userId");
    const userRoleTemp = localStorage.getItem("userRole");

    setUserId(userIdTemp);
    setUserRole(userRoleTemp);
    setLoadingComplete(true);
  }, []);

  return (
    <>
      {loadingComplete ? (
        <BrowserRouter>
          <div>
            <div>
              <Routes>
                <Route path="/" element={<Login userData={userData} />} />
                <Route path="/patientsignup" element={<PatientSignup />} />
                <Route path="/doctorsignup" element={<DoctorSignup />} />

                {/* Admin routes */}
                <Route
                  path="/admin"
                  element={
                    userRole == "admin" ? <AdminWebsite /> : <Navigate to="/" />
                  }
                >
                  {/* <Route path="" element={<Dashboardcontent />} /> */}
                  <Route path="Dashboard" element={<Dashboardcontent />} />
                  <Route
                    path="DashbordPatientRecord"
                    element={<DashbordPatientRecord />}
                  />
                  <Route
                    path="DashboardTestRecord"
                    element={<DashboardTestRecord />}
                  />
                  <Route
                    path="DashboardMedicineRecord"
                    element={<DashbordMedicineRecord />}
                  />
                  <Route
                    path="DashboardNurseRecord"
                    element={<DashbordNurseRecord />}
                  />
                  <Route
                    path="TotalPatientRecord"
                    element={<TotalPatientRecord />}
                  />
                  <Route path="BloodTestRecord" element={<BloodTestRecord />} />
                  <Route path="addNurse" element={<AddingNurse />} />
                  <Route
                    path="TotalMedicineRecord"
                    element={<TotalMedicineRecord />}
                  />
                  <Route
                    path="DoctorAbsentRecord"
                    element={<DoctorAbsentRecord />}
                  />
                  <Route
                    path="DoctorLeaveRecord"
                    element={<DoctorLeaveRecord />}
                  />
                  <Route
                    path="DoctorTotalRecord"
                    element={<DoctorTotalRecord />}
                  />
                  <Route
                    path="NurseAbsentRecord"
                    element={<NurseAbsentRecord />}
                  />
                  <Route path="AddNurse" element={<AddingNurse />} />
                  <Route
                    path="NurseLeaveRecord"
                    element={<NurseLeaveRecord />}
                  />
                  <Route
                    path="NurseTotalRecord"
                    element={<NurseTotalRecord />}
                  />
                  {/* <Route
                    path="TotalBloodRecord"
                    element={<TotalBloodRecord />}
                  /> */}
                  <Route
                    path="TotalXrayRecord"
                    element={<TotalXraysRecord />}
                  />
                  <Route path="TotalTestRecord" element={<TotalTestRecord />} />
                  <Route
                    path="TotalUltrasoundRecord"
                    element={<TotalUltrasoundRecord />}
                  />
                  <Route
                    path="TotalTestTodayRecord"
                    element={<TotalTestTodayRecord />}
                  />
                  {/* <Route path="RequireBLoodRecord" element={<RequireBLoodRecord/>} />    */}
                  <Route
                    path="RemaningBloodRecord"
                    element={<RemaningBloodRecord />}
                  />
                  <Route
                    path="TotalBloodRecord"
                    element={<TotalBloodRecord />}
                  />
                  <Route
                    path="soldMedicineRecords"
                    element={<SoldMedicineRecords />}
                  />

                  <Route path="patient" element={<Patient />} />
                  <Route path="doctor" element={<Doctor />} />
                  <Route path="lab" element={<Lab />} />
                  <Route path="pharmacy" element={<Phar />} />
                  <Route path="blood" element={<Blood />} />
                  <Route path="Nurse" element={<Nurse />} />
                  <Route path="AddNurse" element={<AddingNurse />} />

                  <Route path="addDoctor" element={<AddingDoctor />} />
                  {/* <Route path="BloodTestRecord" element={<BloodTestRecord />} /> */}
                </Route>

                {/* Pharmacy */}
                <Route
                  path="/pharmacy"
                  element={
                    userRole == "pharmacist" ? <Empity /> : <Navigate to="/" />
                  }
                >
                  <Route path="pharmacyComponent" element={<Pharmacy />} />
                  <Route path="Addmedicine" element={<Addmedicine />} />
                  <Route
                    path="TotalMedicineRecords"
                    element={<TotalMedicineRecords />}
                  />
                  <Route
                    path="pendingMedicineRecord"
                    element={<PendingMedinceRecord />}
                  />
                  <Route
                    path="soldMedicineRecord"
                    element={<SoldMedicineRecord />}
                  />
                </Route>

                {/* Blood */}
                <Route
                  path="/Blood"
                  element={
                    userRole == "blood" ? <Empity /> : <Navigate to="/" />
                  }
                >
                  <Route path="BloodComponent" element={<BloodComponent />} />
                  {/* <Route path="Addblood" element={<AddingBlood />} /> */}
                  <Route
                    path="TotalBloodRecords"
                    element={<TotalBloodRecords />}
                  />
                  <Route
                    path="pendingBloodRecord"
                    element={<PendingBloodRecord />}
                  />
                  <Route path="addBLood" element={<AddingBlood />} />
                </Route>

                {/* Laboratory */}
                <Route
                  path="/lab"
                  element={userRole == "lab" ? <Empity /> : <Navigate to="/" />}
                >
                  <Route path="labcomponent" element={<LabComponent />} />
                  <Route path="Addtest" element={<AddingTest />} />
                  <Route
                    path="pendingTestRecord"
                    element={<PendingTestRecord />}
                  />
                  <Route
                    path="processTestRecord"
                    element={<ProcessTestRecord />}
                  />
                  <Route
                    path="TotalTestRecords"
                    element={<TotalTestTodayRecords />}
                  />
                </Route>

                {/* medical ward */}
                <Route
                  path="/medicalWard"
                  element={
                    userRole == "medical ward" ? (
                      <Empity />
                    ) : (
                      <Navigate to="/" />
                    )
                  }
                >
                  <Route path="medicalWard" element={<MedicalWardMainPage />} />
                  <Route
                    path="PendingMedicalWardRecord"
                    element={<PendingMedicalWardRecord />}
                  />
                  <Route
                    path="TotalMedicalWardRecord"
                    element={<TotalMedicalWardMedicineRecord />}
                  />

                  <Route
                    path="TotalMedicineRecord"
                    element={<TotalMedicineRecord />}
                  />
                  <Route
                    path="TotalMedicineHistoryRecord"
                    element={<TotalMedicineHistoryRecord />}
                  />
                </Route>

                <Route path="/TakeAttendence" element={<TakeAttendance />} />

                {/* Patient Routes */}
                <Route
                  path="/patient"
                  element={
                    userId && userRole == "patient" ? (
                      <PatientWebsite />
                    ) : (
                      <Navigate to="/" />
                    )
                  }
                >
                  <Route path="dashboard" element={<PatientDashboard />} />

                  <Route
                    path="notifications"
                    element={<PatientAllNotifications />}
                  />

                  <Route path="update" element={<PatientUpdate />} />

                  <Route path="appointment" element={<BookAppointment />} />
                  <Route
                    path="appointmenthistory"
                    element={<AppointmentHistory />}
                  />
                  <Route path="pharmacyhistory" element={<PharmacyHistory />} />
                  <Route path="bloodhistory" element={<BloodHistory />} />
                  <Route path="labhistory" element={<LaboratoryHistory />} />
                  <Route
                    path="medicalhistory"
                    element={<MedicalWardHistory />}
                  />
                  {/* Profile */}
                  <Route path="profile" element={<PatientProfile />} />
                </Route>

                {/* Doctor routes */}
                <Route
                  path="/doctor"
                  element={
                    userId && userRole == "doctor" ? (
                      <DoctorWebsite />
                    ) : (
                      <Navigate to="/" />
                    )
                  }
                >
                  <Route path="dashboard" element={<DoctorDashboard />} />

                  <Route
                    path="notifications"
                    element={<DoctorAllNotifications />}
                  />

                  <Route path="bloodhistory" element={<DoctorBloodHistory />} />

                  <Route path="profile" element={<DoctorProfile />} />

                  <Route path="update" element={<DoctorUpdate />} />

                  <Route
                    path="appointmenthistory"
                    element={<DoctorAppointmentHistory />}
                  />

                  <Route
                    path="postprocedurepatient"
                    element={<PostProcedurePatients />}
                  />
                  <Route
                    path="labhistory"
                    element={<DoctorLaboratoryHistory />}
                  />

                  <Route
                    path="medicalhistory"
                    element={<DoctorMedicalWardHistory />}
                  />
                  <Route
                    path="pharmacyhistory"
                    element={<DoctorPharmacyHistory />}
                  />
                </Route>

                {/* Not Found  */}
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      ) : (
        ""
      )}
    </>
  );
}

export default RoutesComponent;
