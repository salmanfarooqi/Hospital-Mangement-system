import { useState } from "react";
import axios from "axios";

const PatientReport = (props) => {
  const [treatment, setTreatment] = useState(null);

  // Handle Suggest Treatment click
  const handleSuggestTreatmentClick = async (e) => {
    const changeStatus = 5; // Finished
    const appointmentId = e._id;

    try {
      // writing treatment to patient (appointment) & changing status
      const resp = await axios.put(
        "http://localhost:5000/changeappointmentstatus",
        { appointmentId, changeStatus, treatment }
      );

      // Updating all appointments
      props.allData.getDoctorInfo();
    } catch (error) {
      console.log("Error in Handle Suggest Treatment Click " + error);
    }
  };
  return (
    <>
      <div className=" bg-white  ml-2 p-2 pt-0 pb-1">
        <div className="header flex place-content-between p-4">
          <h1 className="text-lg font-bold">Patient Reports</h1>
          <h2 className="cursor-pointer text-blue-600 font-bold">View All</h2>
        </div>
        {props.allData.waitingForTreatment[0] &&
        "_id" in props.allData.waitingForTreatment[0]
          ? props.allData.waitingForTreatment.map((item) => (
              <>
                <table className="border-collapse patient-report-table">
                  <thead>
                    <tr>
                      <th>Picture</th>
                      <th>Name</th>
                      <th>Report file</th>
                      <th>Appointment Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="flex flex-shrink-0 justify-center content-center">
                          {/* ./images/patients/michael.png */}
                          <img
                            className="w-[60px] h-[60px] rounded-full"
                            src="../images/patients/michael.png"
                            alt="Neil image"
                          ></img>
                        </div>
                      </td>
                      <td>{item.firstName + " " + item.lastName}</td>
                      <td>file</td>
                      <td>
                        {item.timeStart} - {item.timeEnd}{" "}
                        {item.appointmentTime.getUTCDate()}-
                        {item.appointmentTime.getUTCMonth() + 1}-
                        {item.appointmentTime.getUTCFullYear()}{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="treatment flex place-content-around m-2">
                  <input
                    className="form-control mb-2 p-2"
                    style={{ marginRight: "5%" }}
                    type="text"
                    name="treatment"
                    id="treatment"
                    placeholder="Suggest Treatment here...,"
                    onChange={(e) => {
                      setTreatment(e.target.value);
                    }}
                  />
                  <button
                    className="form-control mb-2 p-2"
                    onClick={() => {
                      handleSuggestTreatmentClick(item);
                    }}
                  >
                    Suggest Treatment
                  </button>
                </div>
              </>
            ))
          : "No Appointment has been finished till now."}
      </div>
    </>
  );
};

export default PatientReport;
