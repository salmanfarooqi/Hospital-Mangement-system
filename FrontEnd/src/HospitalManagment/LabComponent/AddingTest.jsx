import React, { useState } from "react";
import Test from "../login/Test.css";
import axios from "axios";
import { useEffect } from "react";

const AddingTest = () => {
  const [Patientname, setPatientName] = useState("");
  const [FName, setFName] = useState("");
  const [TestType, setTestType] = useState("");
  const [TestDetail, setTestDetail] = useState("");
  const [testDate, setTestDate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const testfun = async (e) => {
    const x = new Date();
    const dates = x.getDate();
    const year = x.getFullYear();
    const month = x.getMonth();
    const date = `${month}- ${dates}- ${year}`;
    // const date = "16- 4- 2023";
    console.log("Datae", date);
    // console.log(date);

    // console.log("testdate", testDate);
    await axios
      .post("http://localhost:5000/Addtest", {
        Patientname,
        FName,
        TestType,
        TestDetail,
        testDate: date,
      })
      .then((req, res) => console.log("connecting"));
  };
  // postdata();

  return (
    <div>
      <form className="  loginForms" onClick={handleSubmit} action="post">
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter Patient Name"
          onChange={(e) => setPatientName(e.target.value)}
        ></input>
        <label>FName</label>
        <input
          type="text"
          placeholder="Enter Patient Father Name"
          onChange={(e) => setFName(e.target.value)}
        ></input>

        <select
          className=" drop-down "
          value={TestType}
          onChange={(e) => setTestType(e.target.value)}
        >
          <option>x rays</option>
          <option>ultrasound</option>
          <option>Blood test</option>
        </select>
        <br></br>
        <label>Details Test</label>
        <input
          type="text"
          placeholder="Enter Patient Name"
          onChange={(e) => setTestDetail(e.target.value)}
        ></input>
        <button className="ml-[150px]" onClick={testfun}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddingTest;
