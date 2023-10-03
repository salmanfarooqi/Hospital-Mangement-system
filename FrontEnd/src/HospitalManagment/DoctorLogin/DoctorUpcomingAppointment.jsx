import axios from "axios";

const DoctorUpcomingAppointment = (props) => {
  // Handle Cancel Button Click
  const handleCancelClick = async (e) => {
    try {
      const appointmentId = e._id;
      const changeStatus = 3;
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
    <div className="DoctorUpcomingAppointment h-[269px] border-2 px-2 mr-1 rounded-md">
      <h2 className="text-lg text-blue-800 text-center font-bold">
        Upcoming Appointments
      </h2>

      <div className="h-[232px] overflow-y-auto">
        {props.allData.upcomingAppointment &&
        props.allData.upcomingAppointment.length > 0 ? (
          props.allData.upcomingAppointment.map((item, index) => (
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
            </div>
          ))
        ) : (
          <div className="py-4">No upcoming appointments available.</div>
        )}
      </div>
    </div>
  );
};

export default DoctorUpcomingAppointment;
