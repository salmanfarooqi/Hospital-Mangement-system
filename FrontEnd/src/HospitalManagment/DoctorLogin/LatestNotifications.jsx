import { Link } from "react-router-dom";
const LatestNotifications = (props) => {
  return (
    <>
      <div className="mt-8 shadow-lg border-solid border-2  h-[150px] m-3 ml-0 mr-0 flex-grow p-2 ">
        <div className="flex place-content-between">
          <h1 className="font-bold text-xl">Latest Notifications:</h1>
          <Link to="/doctor/notifications">
            <button className="pr-4 text-blue-700 font-bold">View All</button>
          </Link>
        </div>

        {/* Displaying Notification Message */}
        <h2 className="p-4">
          {props.notifications &&
          props.notifications.length > 0 &&
          props.notifications[props.notifications.length - 1].read == false ? (
            <div className="notificationMessage">
              {props.notifications[props.notifications.length - 1].message}
              {/* <div>
                Time :{" "}
                {
                  props.notifications[
                    props.notifications.length - 1
                  ].date.split("T")[0]
                }
              </div> */}
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
