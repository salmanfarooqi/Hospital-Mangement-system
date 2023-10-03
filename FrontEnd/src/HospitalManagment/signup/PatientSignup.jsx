// import Test from "../login/Test.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import validator from "validator";
export default function DoctorSignup() {
  const navigate = useNavigate();
  const x = new Date();
  const dates = x.getDate();
  const year = x.getFullYear();
  const month = x.getMonth();
  const datedata = `${dates} - ${month} -${year}`;
  console.log("today date is:", datedata);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [weight, setWeight] = useState("");
  const [bloodGroup, setBloodGroup] = useState("A+");
  const [address, setAddress] = useState("");
  const [Repassword, setRePassword] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setgender] = useState("");
  const [age, setage] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [fname, setfname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const postData = async (e) => {
    // validatation

    if (
      !firstName ||
      !lastName ||
      !fname ||
      !age ||
      !gender ||
      !phoneNo ||
      !Email ||
      !password ||
      !Repassword
    ) {
      if (!firstName) {
        toast.error("please enter your first name  !", {
          position: toast.POSITION.TOP_LEFT,
          time: 2000,
        });
        // console.log("c");
      } else if (!lastName) {
        toast.error("please enter your last name  !", {
          position: toast.POSITION.TOP_LEFT,
          time: 2000,
        });
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
      } else if (!phoneNo) {
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

        const patientDetail = {
          firstName,
          lastName,
          fatherName: fname,
          age,
          gender,
          phone: phoneNo,
          email: Email,
          password,
          address,
          bloodGroup,
          weight,
          date: "5 - 5 -2023",
        };

        await axios.post("http://localhost:5000/patient", patientDetail);

        // Wait for 2 seconds to display message
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div
        className="LOGINcontainer "
        style={{
          backgroundImage: "url('/images/poster.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",

          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
          backgroundColor: "gray",
        }}
      >
        <div className="  login flex h-[100vh] items-center">
          <form onSubmit={handleSubmit} method="post" className="w-[100vw] ">
            <div className="insideForm">
              <div className="loginForm ">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter your first Name"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />

                <label htmlFor="LastName">Last Name:</label>
                <input
                  type="text"
                  name="LastName"
                  id="LastName"
                  placeholder="Enter your last Name"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />

                <label>Father Name:</label>
                <input
                  type="text"
                  name="fName"
                  placeholder="Enter your father Name"
                  onChange={(e) => {
                    setfname(e.target.value);
                  }}
                />

                <label htmlFor="gender">Select your gender:</label>
                <select
                  className="drop-down bg-gray-100"
                  value={gender}
                  id="gender"
                  onChange={(e) => {
                    setgender(e.target.value);
                  }}
                >
                  <option value="">your gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>other</option>
                </select>

                <label htmlFor="age">age:</label>
                <input
                  type="number"
                  name="age"
                  id="age"
                  min={1}
                  max={150}
                  placeholder="Enter your age"
                  onChange={(e) => {
                    setage(e.target.value);
                  }}
                />

                <label>phone Number:</label>
                <input
                  type="tel"
                  name="phoneNo"
                  placeholder="Enter your phone number"
                  onChange={(e) => {
                    setPhoneNo(e.target.value);
                  }}
                />
              </div>

              <div className="loginForm">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />

                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Write address here...,"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />

                <label htmlFor="weight">Weight:</label>
                <input
                  type="number"
                  name="weight"
                  id="weight"
                  min={1}
                  max={800}
                  placeholder="Enter your weight"
                  onChange={(e) => {
                    setWeight(e.target.value);
                  }}
                />

                <label htmlFor="bloodGroup">Select your Blood Group:</label>
                <select
                  className="drop-down bg-gray-100"
                  value={bloodGroup}
                  id="bloodGroup"
                  onChange={(e) => {
                    setBloodGroup(e.target.value);
                  }}
                >
                  <option value="A+" defaultChecked>
                    A+
                  </option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>

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
              </div>
            </div>

            <div className="flex place-content-center ">
              <button className="styledButton" onClick={postData}>
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
