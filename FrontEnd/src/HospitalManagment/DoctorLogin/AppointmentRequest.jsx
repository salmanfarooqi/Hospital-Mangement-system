import axios from "axios";

const AppointmentRequest = (props) => {
  // Handle Approve Button Click
  const handleApproveClick = async (e) => {
    try {
      const appointmentId = e._id;
      const changeStatus = 1;
      const resp = await axios.put(
        "http://localhost:5000/changeappointmentstatus",
        { appointmentId: appointmentId, changeStatus: changeStatus }
      );

      // update the upcomming & request Appointments
      props.allData.setChangeInStates(Math.random());
    } catch (err) {
      console.log("Error in Appointment Request, Approve Button" + err);
    }
  };

  // Handle Cancel Button Click
  const handleCancelClick = async (e) => {
    try {
      const appointmentId = e._id;
      const changeStatus = "calcel";
      const resp = await axios.put(
        "http://localhost:5000/changeappointmentstatus",
        { appointmentId: appointmentId, changeStatus: changeStatus }
      );

      // update the upcomming & request Appointments
      props.allData.getDoctorInfo();
    } catch (err) {
      console.log("Error in Appointment Upcomming, Calcel button" + err);
    }
  };

  return (
    <div className="AppointmentRequest mt-[10px] h-[300px]  border-2 px-2 mr-1 rounded-md">
      <h2 className="text-lg text-blue-800 text-center font-bold">
        Appointments Request
      </h2>

      <div className="h-[269px] overflow-y-auto">
        {/* <div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
          <div>hehe</div>
        </div> */}

        {props.allData.requestAppointments &&
        props.allData.requestAppointments.length > 0 ? (
          props.allData.requestAppointments.map((item, index) => (
            <div
              className="appointment my-2 p-2  rounded-xl shadow-lg bg-white"
              key={index}
            >
              <div className="personDetail flex ">
                {/* <div className="image mr-3">img</div> */}
                <div className="detail text-center">
                  <div>
                    Name :{" "}
                    <span className="font-bold">
                      {item.firstName + " " + item.lastName}
                    </span>
                  </div>
                  <div>
                    Time:{" "}
                    <span className="font-bold">
                      {item.timeStart} - {item.timeEnd}
                    </span>
                  </div>
                  <div>
                    Date:{" "}
                    <span className="font-bold">
                      {item.appointmentTime.getUTCDate()}-
                      {item.appointmentTime.getUTCMonth() + 1}-
                      {item.appointmentTime.getUTCFullYear()}{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="buttons flex place-content-around">
                <button
                  onClick={() => {
                    handleApproveClick(item);
                  }}
                  className="text-green-500 font-bold"
                >
                  Accept
                </button>
                <button
                  onClick={() => {
                    handleCancelClick(item);
                  }}
                  className="text-red-600 font-bold"
                >
                  Cancel
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="py-4">No request appointments available.</div>
        )}
      </div>
    </div>
  );
};

export default AppointmentRequest;
