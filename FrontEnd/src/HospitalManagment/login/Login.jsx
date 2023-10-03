import Test from "./Test.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [role, setrole] = useState("");
  const [password, setPassword] = useState("");

  // SideBar
  // props.data("hidden");

  useEffect(() => {
    return () => {};
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password && role) {
      const resp = await axios.post("http://localhost:5000/login", {
        email,
        password,
        role: role.toLowerCase(),
      });

      // Getting data from response
      const respData = resp.data.message;

      // Checking server is working or not
      if (respData) {
        // if server is working
        if (respData == "User detail successfully matched.") {
          // Store the info in localStorage
          localStorage.setItem("userId", resp.data.user._id);
          localStorage.setItem("userRole", role.toLowerCase());
          // storing in useStates
          props.userData.setUserId(resp.data.user._id);
          props.userData.setUserRole(role.toLowerCase());

          toast.success("You are successfully logged in.", {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          // Wait for 2 seconds to display message
          setTimeout(() => {
            // show website based on role
            if (role.toLowerCase() == "doctor") {
              navigate("/doctor/dashboard");
            } else if (role.toLowerCase() == "patient") {
              console.log("going to patient");
              navigate("/patient/dashboard");
            } else if (role.toLowerCase() == "admin") {
              navigate("/admin/Dashboard");
            } else if (role.toLowerCase() == "pharmacist") {
              navigate("/pharmacy/pharmacyComponent");
            } else if (role.toLowerCase() == "blood") {
              navigate("/blood/BloodComponent");
            } else if (role.toLowerCase() == "lab") {
              navigate("/lab/labcomponent");
            } else if (role.toLowerCase() == "medical ward") {
              navigate("/medicalWard/medicalWard");
            }
          }, 2000);

          //
        } else {
          toast.error("Incorrect detail !", {
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
        toast.error("Cannot connect to server. Try later.", {
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
      toast.error("Something is missing !", {
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
  };

  return (
    <>
      <ToastContainer />
      <div
        className="Logincontainer flex h-[100hv] w-[100vw] place-content-center items-center"
        style={{
          backgroundImage: "url('/images/poster.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",

          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
          backgroundColor: "gray",
        }}
      >
        <div className="LLogin flex w-[100vw] place-content-center ">
          <form
            onSubmit={handleSubmit}
            className="loginfForm p-7 rounded-lg"
            action="post"
            // // rgb(173 204 223)
            // #8ed5ff
            style={{ backgroundColor: "rgb(173 204 223)" }}
          >
            <img
              src="../images/doctor.png "
              alt="doctor image"
              className="
         image-doctor"
            />

            <label htmlFor="drop-down" className="font-bold">
              Sign as:
            </label>
            <select
              id="drop-down"
              className="drop-down"
              value={role}
              onChange={(e) => setrole(e.target.value)}
            >
              <option value="">login as</option>
              <option>Doctor</option>
              <option>Admin</option>
              <option>Patient</option>
              <option>Pharmacist</option>
              <option>Lab</option>
              <option>Medical Ward</option>
              <option>Blood</option>
            </select>

            <label className="font-bold" htmlFor="email">
              Email:
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="font-bold" htmlFor="password">
              Password:
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className=" styledButton" type="submit">
              login
            </button>
            <span className="ml-28">
              <Link to="/patientsignup">
                <button className="styledButton">Signup</button>
              </Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
}
