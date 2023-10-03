import Patient from "../../database/patient.js";
import Doctor from "../../database/doctor.js";

const login = async (req, res) => {
  /*
  get patient's All Appointments which have Post Procedure status with Patient name & appointment time & other info
  */
  try {
    const { email, role, password } = req.body;

    //
    let user = null;

    // checking condions based on role

    if (role == "doctor") {
      user = await Doctor.findOne({ email: email, password: password });
    } else if (role == "patient") {
      user = await Patient.findOne({ email: email, password: password });
    } else if (role == "admin") {
      if (email == "admin@gmail.com" && password == "admin123")
        user = "You are logged in as Admin";
    } else if (role == "pharmacist") {
      if (email == "pharmacy@gmail.com" && password == "pharmacy123")
        user = "You are logged in as Pharmacist.";
    } else if (role == "blood") {
      if (email == "blood@gmail.com" && password == "blood123")
        user = "You are logged in as Blood servant.";
    } else if (role == "lab") {
      if (email == "lab@gmail.com" && password == "lab123")
        user = "You are logged in as Lab servant.";
    } else if (role == "medical ward") {
      if (email == "medical@gmail.com" && password == "medical123")
        user = "You are logged in as medical servant.";
    }

    if (user) {
      // Send the response
      res.status(201).json({
        message: "User detail successfully matched.",
        user,
      });
    } else {
      // Send the response
      res.status(201).json({
        message: "Incorrect detail.",
        user,
      });
    }
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ message: "Failed to display Usser details." });
  }
};

export default login;
