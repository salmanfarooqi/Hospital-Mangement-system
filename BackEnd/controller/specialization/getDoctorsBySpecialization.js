import Speciliazation from "../../database/specialization.js";
import axios from "axios";

const getDoctorsBySpecialization = async (req, res) => {
  /*Search by department / specialization name
  then this api will get these doctor's _id's
  which will after send to another api to
  receive the document of these doctors which is
  get all their containing doctors in that field*/
  try {
    const { _id } = req.body;
    let docIds = await Speciliazation.findOne(
      {
        _id,
      },
      { doctorId: 1 } // give me / retrive only doctorId array
    );

    // delete testing
    console.log("doc ids " + docIds);

    // getting these doctors from given ids
    const doctors = await axios.post(
      "http://localhost:5000/doctorsbyid",
      docIds
    );

    // Send the response
    res.status(201).json({
      message: "doctors displayed successfully!",
      doctors: doctors.data,
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ message: "Failed to display doctors." });
  }
};

export default getDoctorsBySpecialization;
