import { Link } from "react-router-dom";
const LatestNotifications = (props) => {
  return (
    <>
      <div className="shadow-lg border-solid border-2  h-[150px]  mb-4 flex-grow p-2 ">
        <div className="flex place-content-between">
          <h1 className="font-bold text-xl">Latest Notifications:</h1>
          <Link to="/patient/notifications">
            <button className="pr-4 text-blue-700 font-bold">View All</button>
          </Link>
        </div>

        {/* Displaying Notification Message */}
        <h2 className="p-4">
          {props.allData.patientDetail !== null &&
          props.allData.patientDetail.notifications &&
          props.allData.patientDetail.notifications.length > 0 ? (
            <div className="notificationMessage">
              {
                props.allData.patientDetail.notifications[
                  props.allData.patientDetail.notifications.length - 1
                ].message
              }
            </div>
          ) : (
            "No notification available."
          )}
        </h2>
      </div>
    </>
  );
};

export default LatestNotifications;
