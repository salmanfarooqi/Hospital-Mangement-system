import {
  addMinutes,
  tostring,
  formatTime,
} from "../PatientLogin/BookAppointment/utils";

const PatientupComingAppointment = (props) => {
  return (
    <div className="PatientupComingAppointment">
      <h3 className="text-center font-bold">Upcoming Appointments</h3>

      {props.allData.appointments.map((item, index) => {
        return (
          <div className="appointment my-2" key={index}>
            <div className="personDetail flex">
              <div className="image mr-3 flex justify-center content-center">
                <img className="h-16 " src="./images/doctor.png" alt="" />
              </div>
              <div className="detail">
                <h3>
                  Dr. {item.doctorId.firstName + " " + item.doctorId.lastName}
                </h3>
                <h3>
                  {formatTime(
                    tostring(new Date(item.appointmentTime).getUTCHours()) +
                      ":" +
                      tostring(new Date(item.appointmentTime).getUTCMinutes())
                  )}{" "}
                  -{" "}
                  {formatTime(
                    addMinutes(
                      tostring(new Date(item.appointmentTime).getUTCHours()) +
                        ":" +
                        tostring(
                          new Date(item.appointmentTime).getUTCMinutes()
                        ),
                      item.duration
                    )
                  )}
                </h3>
                <h3>
                  {new Date(item.appointmentTime).getUTCDate()}-
                  {new Date(item.appointmentTime).getUTCMonth() + 1}-
                  {new Date(item.appointmentTime).getUTCFullYear()}{" "}
                </h3>
              </div>
            </div>
            <div className="buttons flex place-content-between">
              <button className="text-blue-900">View Profile</button>

              <button className="text-red-600 font-bold">Cancel</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PatientupComingAppointment;
