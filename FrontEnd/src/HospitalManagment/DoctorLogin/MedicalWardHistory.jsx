import { useState, useEffect } from "react";
import axios from "axios";

// import SuggestingTestOrTreatment from "./SuggestingTestOrTreatment";

function DoctorMedicalWardHistory() {
  /// Retrieve the user Id from localStorage
  const userId = localStorage.getItem("userId");
  const [searchFilter, setSearchFilter] = useState("");

  const [records, setRecords] = useState([]);

  // getting doctor's information / detail from BackEnd & then separate them
  const getDoctorInfo = async () => {
    const resp = await axios.get(
      "http://localhost:5000/doctordetail/" + userId
    );

    const doctorDetail = resp.data.doctor;

    setRecords([...doctorDetail.medicalWardArr]);
  };
  // getDoctorInfo ends here

  // Get doctor's information / detail from BackEnd. Execute only at startup
  useEffect(() => {
    getDoctorInfo();
  }, []);

  return (
    <>
      {/* Page Name Heading & Search Input */}
      <div className="flex place-content-between min-w-[81vw]">
        {/* Page Name Heading */}
        <span className="font-bold text-2xl">Injections History</span>

        {/* Search Filter input */}
        <input
          type="text"
          placeholder="Search Patient name"
          onChange={(e) => {
            setSearchFilter(e.target.value);
          }}
          className="searchFilterInput"
        ></input>
      </div>
      <div className="container flex">
        {records.length > 0 &&
        records.filter((item) =>
          item.patientName.toLowerCase().includes(searchFilter.toLowerCase())
        ).length > 0 ? (
          <table className="border-collapse min-w-[81vw] shadow-lg">
            <thead className="text-black font-bold bg-gray-200">
              <tr>
                <th className="py-4">Sno</th>
                {/* <th className="py-4">Picture</th> */}
                <th className="py-4">Patient Name</th>
                <th className="py-4">Father Name</th>
                <th className="py-4">Injection Name</th>
                <th className="py-4">Description</th>

                <th>Appointment Date</th>
                {/* <th className="py-4">Detail</th> */}
              </tr>
            </thead>
            <tbody>
              {records.length > 0
                ? records
                    .filter((item) =>
                      item.patientName
                        .toLowerCase()
                        .includes(searchFilter.toLowerCase())
                    )
                    .map((item, index) => {
                      return (
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
                            {item.patientName}
                          </td>
                          {/* Father Name */}
                          <td className="py-2 text-center">
                            {item.patientFName}
                          </td>
                          {/* Injection Name  */}
                          <td className="py-2 text-center">
                            {item.emergencyMedicineName}
                          </td>
                          {/* Injection Description  */}
                          <td className="py-2 text-center">
                            {item.emergencyMedicineDescription}
                          </td>

                          {/* Appointment Date */}
                          <td className="py-2 text-center">{item.date}</td>

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
                      );
                    })
                : "Zero Length of record"}
            </tbody>
          </table>
        ) : (
          <div className="NoReports">
            <h1 className="font-bold m-4 text-xl text-green-600">
              No Injections or drips data exists yet.
            </h1>
          </div>
        )}
      </div>
    </>
  );
}
export default DoctorMedicalWardHistory;
