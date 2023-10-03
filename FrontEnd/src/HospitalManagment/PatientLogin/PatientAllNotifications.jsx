import { useState, useEffect } from "react";
import axios from "axios";

function PatientAllNotifications() {
  /// Retrieve the user Id from localStorage
  const userId = localStorage.getItem("userId");

  const [records, setRecords] = useState([]);

  // getting patient's information / detail from BackEnd & then separate them
  const getPatientInfo = async () => {
    const resp = await axios.get(
      "http://localhost:5000/patientdetail/" + userId
    );

    const patientDetail = resp.data.patient;

    setRecords([...patientDetail.notifications]);
  };
  // getPatientInfo ends here

  // Get patient's information / detail from BackEnd. Execute only at startup
  useEffect(() => {
    getPatientInfo();
  }, []);

  return (
    <>
      <div className="container flex">
        {records.length > 0 ? (
          <table className="border-collapse">
            <thead className="text-blue-800 font-bold">
              <tr>
                <th className="pr-2">Sno</th>

                <th className="pr-2">Notification</th>

                <th className="pr-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {records.length > 0
                ? records.map((item, index) => {
                    return (
                      <tr key={index} className="">
                        <td className="pr-2 p-3">{index + 1}</td>

                        {/* Message */}
                        <td className="pr-2 p-3">{item.message}</td>

                        {/* Date  */}
                        <td className="pr-2 p-3">{item.date.split("T")[0]}</td>
                      </tr>
                    );
                  })
                : "Zero Length of record"}
            </tbody>
          </table>
        ) : (
          <div className="NoReports">
            <h1 className="font-bold m-4 text-xl text-green-600">
              No notifications available yet.
            </h1>
          </div>
        )}
      </div>
    </>
  );
}
export default PatientAllNotifications;
