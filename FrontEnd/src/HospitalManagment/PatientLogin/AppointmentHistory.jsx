import { useState, useEffect } from "react";
import axios from "axios";

function AppointmentHistory() {
  /// Retrieve the user Id from localStorage
  const userId = localStorage.getItem("userId");
  const [searchFilter, setSearchFilter] = useState("");
  const [records, setRecords] = useState([]);

  // getting patient's information / detail from BackEnd & then separate them
  const getPatientInfo = async () => {
    const resp = await axios.get(
      "http://localhost:5000/patientdetail/" + userId
    );

    const patientDetail = resp.data.patient;

    setRecords([...patientDetail.appointment]);
  };
  // getPatientInfo ends here

  // Get patient's information / detail from BackEnd. Execute only at startup
  useEffect(() => {
    getPatientInfo();
  }, []);

  return (
    <>
      {/* Page Name Heading & Search Input */}
      <div className="flex place-content-between min-w-[81vw]">
        {/* Page Name Heading */}
        <span className="font-bold text-2xl">Appointment History</span>

        {/* Search Filter input */}
        <input
          type="text"
          placeholder="Search Doctor name"
          onChange={(e) => {
            setSearchFilter(e.target.value);
          }}
          className="searchFilterInput"
        ></input>
      </div>
      <div className="container flex">
        {records.length > 0 &&
        records.filter((item) =>
          (item.doctorId.firstName + " " + item.doctorId.lastName)
            .toLowerCase()
            .includes(searchFilter.toLowerCase())
        ).length > 0 ? (
          <table className="border-collapse min-w-[81vw] shadow-lg">
            <thead className="text-black font-bold bg-gray-200">
              <tr>
                <th className="py-4">Sno</th>
                {/* <th className="py-4">Picture</th> */}
                <th className="py-4">Doctor Name</th>
                <th className="py-4">Father Name</th>
                <th className="py-4">Status</th>
                <th>Appointment Date</th>
                {/* <th className="py-4">Detail</th> */}
              </tr>
            </thead>
            <tbody>
              {records.length > 0
                ? records
                    .filter((item) =>
                      (item.doctorId.firstName + " " + item.doctorId.lastName)
                        .toLowerCase()
                        .includes(searchFilter.toLowerCase())
                    )
                    .map((item, index) => {
                      return typeof item.doctorId === "object" &&
                        item.doctorId !== null ? (
                        <tr
                          key={index}
                          className="odd:bg-white even:bg-slate-50 hover:bg-gray-300"
                        >
                          <td className="py-2 text-center">{index + 1}</td>
                          {/* Picture */}
                          {/* <td className="py-2 text-center">
                          <div className="flex flex-shrink-0 justify-center content-center">
                            
                            <img
                              className="w-[46px] h-[46px] rounded-full"
                              src="../images/patients/michael.png"
                              alt="Neil image"
                            ></img>
                          </div>
                        </td> */}
                          {/* Name */}
                          <td className="py-2 text-center">
                            {item.doctorId.firstName +
                              " " +
                              item.doctorId.lastName}
                          </td>
                          {/* Father Name */}
                          <td className="py-2 text-center">
                            {item.doctorId.fatherName}
                          </td>
                          {/* Status  */}
                          <td className="py-2 text-center">
                            {item.status == 0
                              ? "Request pending"
                              : item.status == 1
                              ? "Upcoming"
                              : item.status == "cancel"
                              ? "Canceled"
                              : item.status == "completed"
                              ? "Completed"
                              : "In process"}
                          </td>
                          {/* Appointment Date */}
                          <td className="py-2 text-center">
                            {item.appointmentTime.split("T")[0]}
                          </td>

                          {/* Veiw Detail Button */}
                          {/* <td className="py-2 text-center">
                          <button
                            onClick={() => {}}
                            className="cursor-pointer text-blue-600 font-bold"
                          >
                            Veiw Detail
                          </button>
                        </td> */}
                        </tr>
                      ) : (
                        ""
                      );
                    })
                : ""}
            </tbody>
          </table>
        ) : (
          <div className="NoReports">
            <h1 className="font-bold m-4 text-xl text-green-600">
              No appointments data exists yet.
            </h1>
          </div>
        )}
      </div>
    </>
  );
}
export default AppointmentHistory;
