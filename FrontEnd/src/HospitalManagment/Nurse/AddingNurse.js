// import { json } from 'express';
import Test from "../login/Test.css";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
export default function AddingNurse() {
  const [Email, setEmail] = useState("");
  const [Repassword, setRePassword] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setgender] = useState("");
  const [age, setage] = useState("");
  const [qualification, setqualification] = useState("");
  const [name, setname] = useState("");
  const [fname, setfname] = useState("");
  const [specailzation, setspecialization] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const postData = async (e) => {
    try {
      if (name && password && Email && fname && name.length > 5) {
        toast.success("Nurse is sucessfully added !", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        await axios
          .post("http://localhost:5000/AddNurse", {
            name,
            fname,
            age,
            gender,
            Email,
            password,
            qualification,
            specailzation,
          })
          .then((req, res) => console.log("connecting"));
      } else {
        toast.error("please fill all the filed !", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="container flex ">
        <div className="imageContainer">
          <img src="../images/Poster.jpg" alt="doctor" width={"1200px"} />
        </div>
        <div className="login">
          <form onSubmit={handleSubmit} method="post" className="loginForm">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Nurse name"
              onChange={(e) => {
                setname(e.target.value);
              }}
            />

            <label>FName:</label>
            <input
              type="text"
              name="fName"
              placeholder="Enter Nurse father  Name"
              onChange={(e) => {
                setfname(e.target.value);
              }}
            />
            <label>qualification:</label>
            <input
              type="text"
              name="qualification"
              placeholder="Enter your qualification"
              onChange={(e) => {
                setqualification(e.target.value);
              }}
            />
            <label>specialization:</label>
            <input
              type="text"
              name="specialization"
              placeholder="Enter your specailzation"
              onChange={(e) => {
                setspecialization(e.target.value);
              }}
            />

            <label>Select your gender:</label>

            <select
              className="drop-down bg-gray-100"
              value={gender}
              onChange={(e) => setgender(e.target.value)}
            >
              <option value="">your gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>other</option>
            </select>

            <label>age:</label>
            <input
              type="number"
              name="age"
              placeholder="Enter your age"
              onChange={(e) => {
                setage(e.target.value);
              }}
            />

            <label>Email</label>
            <input
              type="email"
              name="Email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            {/* <label>Renter Password:</label>
          <input
            type="password"
            name="Repassword"
            placeholder="Enter your password again"
      
            onChange={(e)=>{setRePassword(e.target.value)}}
          />  */}

            <button onClick={postData}>Add Nurse</button>
          </form>
        </div>
      </div>
    </>
  );
}
