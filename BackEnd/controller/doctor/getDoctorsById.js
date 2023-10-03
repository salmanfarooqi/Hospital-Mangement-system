import Doctor from "../../database/doctor.js";

const getDoctorsById = async (req, res) => {
  /* input is doctor's _id's & this api will
  get all these doctors documents by these _id's */

  // ids to retrieve
  const { doctorId } = req.body;

  try {
    let doctor = await Doctor.find({
      _id: { $in: doctorId },
    });

    res.json(doctor);
  } catch (error) {
    console.log(error);
  }
};

export default getDoctorsById;
