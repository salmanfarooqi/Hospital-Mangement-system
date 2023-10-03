import attendenceCollection from "../database/Attendence.js";
export const attendenceAdding = (req, res) => {
  const { attendences, Name, fName, employ, dateData } = req.body;
  // const {attendence}={attendence.Name}
  // attendence.map((item) => {
  //   console.log(item.Name);
  // });

  const attendenceData = {
    attendences,
    Name,
    fName,
    employ,
    date: dateData,
  };
  console.log("backend attendance data:", attendenceData);
  attendenceCollection.insertMany([attendenceData]);
  console.log(attendences, Name, fName);
  res.status(200).json(attendenceData);
};

export default attendenceAdding;
