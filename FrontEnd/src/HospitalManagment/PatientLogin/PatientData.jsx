import { Link } from "react-router-dom";
const PatientData = (props) => {
  return (
    <div className="shadow-lg border-solid border-2  h-[150px] my-2 flex-grow p-2">
      <div>
        <div className="header flex place-content-between">
          <h3 className="font-bold text-xl">Your Data:</h3>
          <div>
            <Link to="/patient/update">
              <button className="pr-4 text-blue-700 font-bold">Change</button>
            </Link>
          </div>
        </div>

        {/* Displaying Patient detail */}
        {props.allData.patientDetail ? (
          <div className="detail   flex place-content-between mt-8 mx-4">
            <div className="Name">
              <p>Name</p>
              <h3 className="font-bold">
                {props.allData.patientDetail.firstName +
                  " " +
                  props.allData.patientDetail.lastName}{" "}
              </h3>
            </div>

            <div className="Age">
              <p>Age</p>
              <h3 className="font-bold">{props.allData.patientDetail.age}</h3>
            </div>

            <div className="weight">
              <p>Weight</p>
              <h3 className="font-bold">
                {" "}
                {props.allData.patientDetail.weight} kg
              </h3>
            </div>

            <div className="blood">
              <p>Blood</p>
              <h3 className="font-bold">
                {props.allData.patientDetail.bloodGroup}
              </h3>
            </div>
          </div>
        ) : (
          <div className="flex place-content-between mt-8 mx-4">
            "Loading..,"
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientData;
