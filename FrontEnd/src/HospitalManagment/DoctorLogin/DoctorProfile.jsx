import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function DoctorProfile() {
  /// Retrieve the user Id from localStorage
  const userId = localStorage.getItem("userId");
  const [user, setUser] = useState(null);

  // getting user's information / detail from BackEnd & then separate them
  const getUserInfo = async () => {
    const resp = await axios.get(
      "http://localhost:5000/doctordetail/" + userId
    );

    const userDetail = resp.data.doctor;

    setUser(userDetail);
  };
  // getUserInfo ends here

  // Get user's information / detail from BackEnd. Execute only at startup
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      {user !== null ? (
        <div className="text-gray-700">
          {/* Profile Heading */}
          <span className="font-bold text-2xl flex place-content-center mb-8">
            Profile
          </span>

          {/* Profile details  */}
          <div className="grid md:grid-cols-2 gap-x-20 text-base">
            {/* First Name */}
            <div className="grid grid-cols-2 ">
              <div className="px-4 py-2 font-semibold">First Name</div>
              <div className="px-4 py-2">{user.firstName}</div>
            </div>

            {/* Last name */}
            <div className="grid grid-cols-2 ">
              <div className="px-4 py-2 font-semibold">Last Name</div>
              <div className="px-4 py-2">{user.lastName}</div>
            </div>

            {/* Father name */}
            <div className="grid grid-cols-2 ">
              <div className="px-4 py-2 font-semibold">Last Name</div>
              <div className="px-4 py-2">{user.fatherName}</div>
            </div>

            {/* Gender */}
            <div className="grid grid-cols-2 ">
              <div className="px-4 py-2 font-semibold">Gender</div>
              <div className="px-4 py-2">{user.gender}</div>
            </div>

            {/* Age */}
            <div className="grid grid-cols-2 ">
              <div className="px-4 py-2 font-semibold">Age</div>
              <div className="px-4 py-2">{user.age}</div>
            </div>

            {/* contact */}
            <div className="grid grid-cols-2 ">
              <div className="px-4 py-2 font-semibold">Contact No.</div>
              <div className="px-4 py-2">{user.phone}</div>
            </div>

            {/* Email */}
            <div className="grid grid-cols-2 ">
              <div className="px-4 py-2 font-semibold">Email.</div>
              <div className="px-4 py-2">
                <a className="text-blue-800">{user.email}</a>
              </div>
            </div>

            {/* Address */}
            <div className="grid grid-cols-2 ">
              <div className="px-4 py-2 font-semibold">Address</div>
              <div className="px-4 py-2">{user.address}</div>
            </div>

            {/* Specialization */}
            <div className="grid grid-cols-2 ">
              <div className="px-4 py-2 font-semibold">Specialization</div>
              <div className="px-4 py-2">
                {user.specialization.map((item, index) => {
                  return (
                    <span key={index}>
                      {index > 0 ? " , " : ""}
                      {item.name}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Education */}
            <div className="grid grid-cols-2 ">
              <div className="px-4 py-2 font-semibold">Education.</div>
              <div className="px-4 py-2">{user.education}</div>
            </div>
          </div>

          {/* Update button */}
          <div className="flex place-content-center">
            <Link to="/patient/update">
              <button className="m-10 form-control mb-3 p-2 bg-blue-600 hover:bg-blue-800 text-white font-bold w-64 transition ease-in duration-200 text-center text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
      ) : (
        "Loading..,"
      )}
    </>
  );
}
export default DoctorProfile;
