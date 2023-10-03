import Appointment from "../database/appointment.js";

const getAppointment = async (req, res) => {
  const appointments = await Appointment.find({});
};
// console.log("length is ", appointments);
export default getAppointment;
