import React, { useState } from "react";
import Test from "../login/Test.css";
import axios from "axios";

const AddingBlood = () => {
  const [BloodGroup, setbloodGroup] = useState("");
  const [BloodQuantity, setbloodQuantity] = useState(0);
  // const [BloodDate, setbloodDate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addBlood = async () => {
    const x = new Date();
    const dates = x.getDate();
    const year = x.getFullYear();
    const month = x.getMonth();
    const BloodDate = `${month}- ${dates}- ${year}`;
    console.log("blood qunatity:", BloodQuantity);

    await axios.post(
      "http://localhost:5000/Addblood",
      {
        BloodGroup,
        BloodDate,
        BloodQuantity,
      },
      []
    );
    alert("blood is added");
  };
  return (
    <div>
      <form className=" loginForms" onClick={handleSubmit} action="post">
        <label>Enter Blood Group</label>
        <tr></tr>
        <select
          className="drop-down bg-gray-100"
          onClick={(e) => setbloodGroup(e.target.value)}
        >
          <option>Select Blood group</option>
          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>AB+</option>
          <option>AB-</option>
          <option>O+</option>
          <option>o-</option>
        </select>
        <label>Enter Blood Quantity</label>
        <input
          input
          type="number"
          placeholder="Enter qunatity"
          onChange={(e) => setbloodQuantity(e.target.value)}
        />

        <button onClick={addBlood}>Add Blood</button>
      </form>
    </div>
  );
};

export default AddingBlood;
