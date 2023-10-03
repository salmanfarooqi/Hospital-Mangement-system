import { useState, useEffect } from "react";
import axios from "axios";

function DoctorAllNotifications() {
  /// Retrieve the user Id from localStorage
  const userId = localStorage.getItem("userId");

  const [records, setRecords] = useState([]);

  // getting doctor's information / detail from BackEnd & then separate them
  const getDoctorInfo = async () => {
    const resp = await axios.get(
      "http://localhost:5000/doctordetail/" + userId
    );

    const doctorDetail = resp.data.doctor;

    setRecords([...doctorDetail.notifications]);
  };
  // getDoctorInfo ends here

  // Get doctor's information / detail from BackEnd. Execute only at startup
  useEffect(() => {
    getDoctorInfo();
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
export default DoctorAllNotifications;
