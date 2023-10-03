import TodayPatient from "./TodayPatient";
import TotalAppointment from "./TotalAppointment";
import TotalPatient from "./TotalPatient";
import PatientRequest from "./PatientRequest";
import AppointmentRequest from "./AppointmentRequest";
import CancelAppointment from "./CancelAppointment";
import Sidebar from "../sidebars/Sidebar";
import Navbar from "../Navbar/Navbar";
import Patientnumber from "../Dashboardcontent/Patientnumber";

function Patient() {
  return (
    <>
      {/* <Navbar />
      <Sidebar /> */}
      <div className="relative top-[0px] left-[0px]">
        <div className=" flex ml-6">
          <TotalPatient />
          <TotalAppointment />

          <Patientnumber />
        </div>
        /
      </div>
    </>
  );
}
export default Patient;
