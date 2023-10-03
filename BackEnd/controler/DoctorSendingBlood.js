import BloodWard from "../database/bloodWard.js";

const DoctorSendingBlood = async (req, res) => {
  const bloodData = await BloodWard.find({});
  res.send(bloodData);
  console.log(bloodData);
};

export default DoctorSendingBlood;
