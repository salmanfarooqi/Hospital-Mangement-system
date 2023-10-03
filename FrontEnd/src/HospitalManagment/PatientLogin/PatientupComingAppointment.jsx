import {
  addMinutes,
  tostring,
  formatTime,
} from "../PatientLogin/BookAppointment/utils";

const PatientupComingAppointment = (props) => {
  return (
    <div className="DoctorUpcomingAppointment h-[86vh] border-2 px-4 mx-1 rounded-md">
      <h2 className="text-lg text-blue-800 text-center font-bold">
        Upcoming Appointments
      </h2>

      <div className="h-[100%] overflow-y-auto">
        {props.allData.appointments && props.allData.appointments.length > 0 ? (
          props.allData.appointments.map((item, index) => (
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
                      Dr.{" "}
                      {item.doctorId.firstName + " " + item.doctorId.lastName}
                    </span>
                  </div>
                  <div>
                    Time:{" "}
                    <span className="font-bold">
                      {formatTime(
                        tostring(new Date(item.appointmentTime).getUTCHours()) +
                          ":" +
                          tostring(
                            new Date(item.appointmentTime).getUTCMinutes()
                          )
                      )}{" "}
                      -{" "}
                      {formatTime(
                        addMinutes(
                          tostring(
                            new Date(item.appointmentTime).getUTCHours()
                          ) +
                            ":" +
                            tostring(
                              new Date(item.appointmentTime).getUTCMinutes()
                            ),
                          item.duration
                        )
                      )}
                    </span>
                  </div>
                  <div>
                    Date:{" "}
                    <span className="font-bold">
                      {new Date(item.appointmentTime).getUTCDate()}-
                      {new Date(item.appointmentTime).getUTCMonth() + 1}-
                      {new Date(item.appointmentTime).getUTCFullYear()}{" "}
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

export default PatientupComingAppointment;
