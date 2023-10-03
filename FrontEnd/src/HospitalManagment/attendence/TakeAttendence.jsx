import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../sidebars/Sidebar";
import { useEffect, useState } from "react";

const TakeAttendence = () => {
  let count = 0;
  let todaydate = new Date();
  const Day = todaydate.getDate();
  const month = todaydate.getMonth();
  const year = todaydate.getFullYear();
  const dateData = `${Day}-${month}-${year}`;
  console.log("datae", dateData);

  const [attendences, setattendence] = useState("");
  const [displayAttendence, setdisplayAttendence] = useState("Doctor");
  const [doctorAttendence, setdoctorAttendence] = useState([]);
  const [NurseAttendence, setNurseAttendence] = useState([]);
  const [selection, setSelection] = useState("doctor");
  const [data, setdata] = useState([]);
  const [attendenceData, setattendenceData] = useState([]);
  let newdata = "present";
  let doctorarr = [];
  let nursearr = [];
  let isattendencePresent;
  useEffect(() => {
    const fetechData = async () => {
      const getDoctor = (await axios.get("http://localhost:5000/doctors")).data;

      const getNurse = (await axios.get("http://localhost:5000/")).data
        .getNurseData;

      const getattendenceData = (await axios.get("http://localhost:5000/")).data
        .getAttendenceData;
      // console.log("data", typeof getDoctor);

      setNurseAttendence(getNurse);
      setdoctorAttendence(getDoctor);
      setattendenceData(getattendenceData);
    };
    fetechData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const postData = async (e) => {
    if (todaydate.getDay() === 30 || todaydate.getDay() === 54) {
      alert("Sorry, today is a holiday.");

      // } else {
      //   if (isattendencePresent == "yes") {
      //     alert("today attendence is already done");
      //   } else {
    } else {
      nursearr.map(async (nurse) => {
        await axios.post("http://localhost:5000/TakeAttendence", nurse);
        console.log(nurse);
      });

      alert("Attendance is submitted");
    }
  };

  return (
    <>
      <div>{/* <Sidebar /> */}</div>

      <div className="relative top-[10px] ">
        <div className="flex ml-[800px]">
          <form onSubmit={handleSubmit}>
            <select
              className="drop-down"
              value={displayAttendence}
              onChange={(e) => setdisplayAttendence(e.target.value)}
            >
              <option>Doctor</option>
              <option>Nurse</option>
            </select>
          </form>
        </div>
        {displayAttendence == "Doctor" ? (
          <div className="  mt-[20px]">
            <table className="w-[1100px] border-2  ">
              <thead className="bg-gray-100  flex ">
                <tr className="py-4">
                  <th className="  pl-[10px]">S.No</th>
                  <th className="  pl-[150px] ">Name</th>
                  <th className=" pl-[150px]"> father Name</th>

                  <th className="pl-[150px]"> Attendence</th>
                </tr>
              </thead>

              <tbody>
                {doctorAttendence.map((item) => (
                  <tr className="pt-4  w-auto hover:bg-green-100 flex">
                    <th className="  pl-[10px]">{++count}</th>
                    <th className="  pl-[150px] ">{item.firstName}</th>
                    <th className=" pl-[150px]"> {item.fatherName}</th>

                    <th className="pl-[150px]">
                      <form
                        className="flex w-[200px] space-between shadow-none"
                        onSubmit={handleSubmit}
                      >
                        <h1 className="  m-2"> Present</h1>
                        <input
                          className="w-[50px] shadow-none"
                          type="radio"
                          name="attendence"
                          value="present"
                          // checked
                          onClick={(e) => setattendence(e.target.value)}
                        ></input>
                        <h1 className=" text-center m-2"> Absent</h1>
                        <input
                          className="w-[50px] ml-2 shadow-none"
                          type="radio"
                          name="attendence"
                          value="Absent"
                          onClick={(e) => setattendence(e.target.value)}
                        ></input>
                        <h1 className="  m-2"> Leave</h1>
                        <input
                          className="w-[50px] ml-2 shadow-none"
                          type="radio"
                          name="attendence"
                          value="Leave"
                          onClick={(e) => setattendence(e.target.value)}
                        ></input>
                      </form>
                    </th>
                    <sm className="makeithidden">
                      {nursearr.push({
                        Name: item.firstName,
                        fName: item.fatherName,
                        employ: "Doctor",
                        attendences,
                        dateData,
                      })}
                    </sm>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="ml-[900px]" onClick={postData}>
              submit
            </button>
            {console.log("datas", data)}
          </div>
        ) : (
          <div className="  mt-[20px] ">
            <table className="w-[1100px]  border-2 ">
              <thead className="bg-gray-100  flex ">
                <tr className="py-4">
                  <th className="  pl-[10px]">S.No</th>
                  <th className="  pl-[150px] ">Name</th>
                  <th className=" pl-[150px]"> father Name</th>

                  <th className="pl-[150px]"> Attendence</th>
                </tr>
              </thead>

              <tbody>
                {NurseAttendence.map((item) => (
                  <tr className="pt-4  w-auto hover:bg-green-100 flex">
                    <th className="  pl-[10px]">{++count}</th>
                    <th className="  pl-[150px] ">{item.Name}</th>
                    <th className=" pl-[150px]"> {item.fatherName}</th>

                    <th className="pl-[150px]">
                      <form
                        className="flex w-[200px] space-between shadow-none"
                        onSubmit={handleSubmit}
                      >
                        <label>present</label>
                        <input
                          className="w-[50px] shadow-none"
                          type="radio"
                          name="attendence"
                          value="present"
                          // checked
                          onClick={(e) => setattendence(e.target.value)}
                        ></input>
                        <h1 className=" text-center m-2"> Absent</h1>
                        <input
                          className="w-[50px] ml-2 shadow-none"
                          type="radio"
                          name="attendence"
                          value="Absent"
                          onClick={(e) => setattendence(e.target.value)}
                        ></input>
                        <h1 className="  m-2"> Leave</h1>
                        <input
                          className="w-[50px] ml-2 shadow-none"
                          type="radio"
                          name="attendence"
                          value="Leave"
                          onClick={(e) => setattendence(e.target.value)}
                        ></input>
                        {console.log("attendence value is:", attendences)}
                      </form>
                    </th>
                    <sm className="makeithidden">
                      {nursearr.push({
                        Name: item.Name,
                        fName: item.fatherName,
                        employ: "Nurse",
                        attendences,
                        dateData,
                      })}
                    </sm>
                    {console.log("arr data", nursearr)}
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="ml-[900px]" onClick={postData}>
              submit
            </button>
            {/* {console.log("attendence is :", attendence)} */}
          </div>
        )}
        {/* {console.log("obj", obj)} */}
      </div>
    </>
  );
};
export default TakeAttendence;
