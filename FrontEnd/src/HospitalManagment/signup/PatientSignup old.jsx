// import Test from "../login/Test.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import validator from "validator";
import "react-toastify/dist/ReactToastify.css";

export default function PatientSignup() {
  const [Email, setEmail] = useState("");
  const [Repassword, setRePassword] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setgender] = useState("");
  const [age, setage] = useState("");
  const [disease, setdiesease] = useState("");
  const [name, setname] = useState("");
  const [fname, setfname] = useState("");
  const [patient, setpatient] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const getpatientdata = (await axios.get("http://localhost:5000/")).data
        .getpatientData;
      setpatient(getpatientdata);
      // console.log("data", getpatientdata);
      // setpatient(getpatientdata);
    };

    fetchdata();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const postData = async (e) => {
    // validatation
    let arr = [];
    patient.map((value) => {
      arr.push(value.Email);
      // console.log(value.Email);
    });
    if (
      !name ||
      !fname ||
      !age ||
      !gender ||
      !disease ||
      !Email ||
      !password ||
      !Repassword
    ) {
      if (!name) {
        toast.error("please enter your name  !", {
          position: toast.POSITION.TOP_LEFT,
          time: 2000,
        });
        // console.log("c");
      } else if (!fname) {
        toast.error("please enter your father name !", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else if (!age) {
        toast.error("please enter your age !", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (!disease) {
        toast.error("please enter your phone number!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (!password) {
        toast.error("please enter password!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (!Repassword) {
        toast.error("please enter Respassword !", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (!gender) {
        toast.error("please enter your gender !", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (validator.isEmail(Email)) {
        toast.error("please enter valid email !", {
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
    } else {
      if (password != Repassword) {
        toast.error("password is not matching with respassword !", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.success("your accouunt is sucessfully created !", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        axios.post("http://localhost:5000/signup", {
          name,
          fname,
          age,
          gender,
          disease,
          Email,
          password,
        });
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="container ">
        {/* <ToastContainer /> */}
        <div className="imageContainer">
          {/* <img src="./doctorPatient.png" alt="doctor" /> */}
        </div>
        <div className="  login">
          <form onSubmit={handleSubmit} method="post" className=" loginForm">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={(e) => {
                setname(e.target.value);
              }}
            />

            <label>FName:</label>
            <input
              type="text"
              name="fName"
              placeholder="Enter your father Name"
              onChange={(e) => {
                setfname(e.target.value);
              }}
            />
            <label>phone Number:</label>
            <input
              type="tel"
              name="disease"
              placeholder="Enter your phone number"
              onChange={(e) => {
                setdiesease(e.target.value);
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
              name="email"
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

            <label>Renter Password:</label>
            <input
              type="password"
              name="Repassword"
              placeholder="Enter your password again"
              onChange={(e) => {
                setRePassword(e.target.value);
              }}
            />

            <button onClick={postData}>Create account</button>
          </form>
        </div>
      </div>
    </>
  );
}
