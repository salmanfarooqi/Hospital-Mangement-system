import expres from "express";
// import { loginContoler } from '../../controler/user.js'
// import multer from "multer";
import getAppointment from "../../controler/totalAppointment.js";

import addBlood from "../../controler/addBloodControler.js";
import addDoctor from "../../controler/addDoctorControler.js";
import testAdd from "../../controler/addTestControler.js";
import getsData from "../../controler/getsDataControler.js";
import addNurse from "../../controler/addNurseControler.js";
import testpendingStatusUpdate from "../../controler/testpendingStatusUpdate.js";
import testprocessstatusUpdate from "../../controler/testProcessStatusupdates.js";
// import signUp from "../../controler/signUpControler.js";
// import addMedicine from "../../controler/addMedicineControler.js"; problem
import addMedicine from "../../controler/addMedicineControler.js";
import signUp from "../../controler/signUpControler.js";
import addpharmacy from "../../controler/doctorSendingMedicine.js";
import pharmacyPendingStatus from "../../controler/pharmacyPendingStatusUpdate.js";
import emergancymedicine from "../../controler/medicalWardControler.js";
import pendingMedicalWardStatusUpdate from "../../controler/pendingMedicalWardStatusUpdate.js";
import imageFun from "../../controler/imageControler.js";
import attendenceAdding from "../../controler/attendenceContoler.js";
import DoctorSendingBlood from "../../controler/DoctorSendingBlood.js";
import pendingBlood from "../../controler/pendingBloodControler.js";

const router = expres.Router();

/*
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "E:sReactprojec\t\reactprogram\\backend\\uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
router.post("/processTestRecord", upload.single("image"), (req, res) => {
  res.send("image upload");
});
*/

// router.post("/login",loginContoler)
router.post("/signup", signUp);
// router.post("/Addmedicine", addMedicine);// lets for try routing is abbasmedince
router.post("/Addmedicine", addMedicine);
router.post("/Addblood", addBlood);
router.post("/Addtest", testAdd);
router.post("/addDoctor", addDoctor);
router.post("/AddNurse", addNurse);
router.post("/addpharmacy", addpharmacy);
router.post("/norouter", emergancymedicine);
router.post("/processTestRecord", imageFun);
router.post("/TakeAttendence", attendenceAdding);
router.put("/pendingTestRecord", testpendingStatusUpdate);
router.put("/processTestRecord", testprocessstatusUpdate);
router.put("/pendingMedicineRecord", pharmacyPendingStatus);
router.put("/PendingMedicalWardRecord", pendingMedicalWardStatusUpdate);
router.get("/getAppointments", getAppointment);
router.get("/getBloodData", DoctorSendingBlood);
router.get("/appointment", getAppointment);
router.put("/getBloodData", pendingBlood);

router.get("/", getsData);

export default router;
