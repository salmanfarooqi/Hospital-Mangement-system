// import Test from "../login/Test.css";
import { useEffect, useState, useSyncExternalStore } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import validator from "validator";
import "react-toastify/dist/ReactToastify.css";
export default function PatientUpdate() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [Repassword, setRePassword] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setgender] = useState("");
  const [age, setage] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const [fname, setfname] = useState("");

  // getting user detail
  const getUserDetail = async () => {
    const resp = await axios.get(
      "http://localhost:5000/patientdetail/" + userId
    );

    const userTemp = resp.data.patient;

    if (userTemp) {
      setFirstName(userTemp.firstName);
      setLastName(userTemp.lastName);
      setfname(userTemp.fatherName);
      setgender(userTemp.gender);
      setage(userTemp.age);
      setPhoneNo(userTemp.phone);
      setEmail(userTemp.email);
      setAddress(userTemp.address);
    }
  };

  useEffect(() => {
    getUserDetail();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const postData = async (e) => {
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
        toast.success("your accouunt is sucessfully updated !", {
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
        };

        const updateRoute = "http://localhost:5000/patient/" + userId;
        await axios.put(updateRoute, patientDetail);

        // Wait for 2 seconds to display message
        setTimeout(() => {
          navigate("/patient/dashboard");
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
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",

          backgroundColor: "gray",
        }}
      >
        <div className="login flex h-[100vh] items-center">
          <form onSubmit={handleSubmit} method="post" className="w-[81vw]">
            <div className="insideForsm flex place-content-center mx-10">
              <div className="loginForm">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  defaultValue={firstName}
                  placeholder="Enter your first Name"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />

                <label htmlFor="LastName">Last Name:</label>
                <input
                  type="text"
                  name="LastName"
                  defaultValue={lastName}
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
                  defaultValue={fname}
                  placeholder="Enter your father Name"
                  onChange={(e) => {
                    setfname(e.target.value);
                  }}
                />

                <label>Select your gender:</label>
                <select
                  className="drop-down bg-gray-100"
                  value={gender}
                  onChange={(e) => {
                    setgender(e.target.value);
                  }}
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
                  defaultValue={age}
                  placeholder="Enter your age"
                  onChange={(e) => {
                    setage(e.target.value);
                  }}
                />
              </div>

              {/*  */}
              <div className="loginForm">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  defaultValue={Email}
                  id="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />

                <label>phone Number:</label>
                <input
                  type="tel"
                  name="phoneNo"
                  defaultValue={phoneNo}
                  placeholder="Enter your phone number"
                  onChange={(e) => {
                    setPhoneNo(e.target.value);
                  }}
                />

                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  defaultValue={address}
                  id="address"
                  placeholder="Write address here...,"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />

                <label>Password:</label>
                <input
                  type="password"
                  name="Repassword"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />

                <label>Re-enter Password:</label>
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
                Update account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
