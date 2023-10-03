import Patient from "../../database/patient.js";
const updatePatient = async (req, res) => {
  try {
    const id = req.params.id;
    const patient = await Patient.findOneAndUpdate({ _id: id }, req.body);
    res.json(patient);
  } catch (error) {
    res.send(error);
  }
};

export default updatePatient;
