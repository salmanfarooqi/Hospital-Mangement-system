import { useState, useEffect } from "react";
import axios from "axios";

import SuggestingTestOrTreatment from "./SuggestingTestOrTreatment";

function PostProcedurePatients() {
  /// Retrieve the user Id from localStorage
  const userId = localStorage.getItem("userId");
  const [doctor, setDoctor] = useState(null);
  const [records, setRecords] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  // change in values, then update all
  const [changeInStates, setChangeInStates] = useState(false);

  // getting Doctor's information / detail from BackEnd & then separate them
  const getDoctorInfo = async () => {
    const resp = await axios.get(
      "http://localhost:5000/doctorappointments/" + userId
    );

    const doctorDetail = resp.data.doctor;
    const { _id, firstName, lastName } = doctorDetail;
    const doctorTemp = { _id, firstName, lastName };
    const appointmentsArr = doctorDetail.appointment;

    //
    setDoctor(doctorTemp);

    setRecords([...doctorDetail.appointment]);

    setSelectedPatient([]);
  };
  // getDoctorInfo ends here

  // for child components
  const allData = {
    doctor,
    records,
    selectedPatient,
    changeInStates,
    setChangeInStates,
    getDoctorInfo,
    setSelectedPatient,
  };

  // Get Doctor's information / detail from BackEnd. Execute only at startup
  useEffect(() => {
    getDoctorInfo();
  }, []);

  return (
    <>
      {/* Page Name Heading & Search Input */}
      <div className="flex place-content-between min-w-[81vw]">
        {/* Page Name Heading */}
        <span className="font-bold text-2xl">Post Process Patients</span>

        {/* Search Filter input */}
        {selectedPatient.length == 0 ? (
          <input
            type="text"
            placeholder="Search Patient name"
            onChange={(e) => {
              setSearchFilter(e.target.value);
            }}
            className="searchFilterInput"
          ></input>
        ) : (
          ""
        )}
      </div>
      <div className="container flex">
        {selectedPatient.length === 0 ? (
          records.length > 0 &&
          records.filter((item) =>
            (item.patientId.firstName + " " + item.patientId.lastName)
              .toLowerCase()
              .includes(searchFilter.toLowerCase())
          ).length > 0 ? (
            <table className="border-collapse min-w-[81vw] shadow-lg">
              <thead className="text-black font-bold bg-gray-200">
                <tr>
                  <th className="py-4">Sno</th>
                  {/* <th className="py-4">Picture</th> */}
                  <th className="py-4">Name</th>
                  <th className="py-4">Father Name</th>
                  <th className="py-4">Status</th>
                  <th>Appointment Time</th>
                  <th className="py-4">Detail</th>
                </tr>
              </thead>
              <tbody>
                {records.length > 0
                  ? records
                      .filter((item) =>
                        (
                          item.patientId.firstName +
                          " " +
                          item.patientId.lastName
                        )
                          .toLowerCase()
                          .includes(searchFilter.toLowerCase())
                      )
                      .map((item, index) => {
                        return typeof item.patientId === "object" &&
                          item.patientId !== null ? (
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
                              {item.patientId.firstName +
                                " " +
                                item.patientId.lastName}
                            </td>
                            {/* Father Name */}
                            <td className="py-2 text-center">
                              {item.patientId.fatherName}
                            </td>
                            {/* Status  */}
                            <td className="py-2 text-center">
                              {item.medicalWardArr.length > 0
                                ? "Drips Injected"
                                : item.bloodWardArr.length > 0
                                ? "Blood Injected"
                                : item.testArr.length > 0
                                ? "Test completed"
                                : "unkown"}
                            </td>
                            {/* Appointment Date */}
                            <td className="py-2 text-center">
                              {item.appointmentTime.split("T")[0]}
                            </td>

                            {/* Veiw Detail Button */}
                            <td className="py-2 text-center">
                              <button
                                onClick={() => {
                                  setSelectedPatient([item]);
                                }}
                                className="cursor-pointer text-blue-600 font-bold"
                              >
                                Veiw Detail
                              </button>
                            </td>
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
                No Reports of Post Procedure Patients have been received.
              </h1>
            </div>
          )
        ) : (
          ""
        )}
      </div>
      <div className="selectedPatient">
        {selectedPatient.length > 0 ? (
          <SuggestingTestOrTreatment allData={allData} />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
export default PostProcedurePatients;
