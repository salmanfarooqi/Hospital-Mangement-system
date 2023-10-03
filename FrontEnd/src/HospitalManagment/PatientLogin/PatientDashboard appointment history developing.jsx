import AppointmentHistory from "./AppointmentHistory/AppointmentHistory";
function PatientDashboard(props) {
  props.data("Patient");

  return (
    <>
      <AppointmentHistory />
    </>
  );
}
export default PatientDashboard;
