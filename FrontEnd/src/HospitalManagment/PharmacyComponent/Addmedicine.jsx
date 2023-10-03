import { useState } from "react";
import axios from "axios";

const Addmedicine = () => {
  let testDate;
  const [medicineName, setmdicineName] = useState("");
  const [medinceIssueDate, setmedinceIssueDate] = useState("");
  const [medinceExpireDate, setmedinceExpireDate] = useState("");
  const [medicineQUantity, setmedicineQUantity] = useState("");
  // const [testDate, setTestDate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const AddingMedicine = () => {
    try {
      const x = new Date();
      const dates = x.getDate();
      const year = x.getFullYear();
      const month = x.getMonth();
      testDate = `${dates}- ${month}- ${year}`;
      // const date = "16- 4- 2023";
      // console.log(date);
      // setTestDate(date);

      alert("congratualtion your account is succesfully created");

      axios
        .post("http://localhost:5000/Addmedicine", {
          medicineName,
          medinceIssueDate,
          medinceExpireDate,
          medicineQUantity,
          testDate,
        })
        .then((req, res) => console.log("connecting"));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form action="post" className="ml-10 mt-10" onClick={handleSubmit}>
      <label>enter medicine name</label>
      <input
        type="text"
        onChange={(e) => setmdicineName(e.target.value)}
      ></input>

      <label>enter medicine issue date</label>
      <input
        type="date"
        onChange={(e) => setmedinceIssueDate(e.target.value)}
      ></input>
      <label>enter medicine expire date</label>
      <input
        type="date"
        onChange={(e) => setmedinceExpireDate(e.target.value)}
      ></input>
      <label>enter medicine quantity</label>
      <input
        type="number"
        onChange={(e) => setmedicineQUantity(e.target.value)}
      ></input>
      <button onClick={AddingMedicine}>Add medicine</button>
    </form>
  );
};

export default Addmedicine;
