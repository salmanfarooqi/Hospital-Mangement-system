import { TotalMedicine } from "../Dashboardcontent/DashboardData";

const PatientReportDisplay = () => {
  const filteredArr = TotalMedicine.filter((val, index) => {
    return index < 5;
  });

  return (
    <>
      <div className=" bg-green-100  h-[300px] mt-2 ml-2 flex-grow header flex place-content-around items-center p-4 ">
        <div className="big-image flex justify-center items-center ">
          <div>
            <img
              className="w-50 h-20 "
              src="./images/kit-medical-solid.svg"
              alt="Kit Medical image"
            />
          </div>
        </div>

        <div className="report-list w-[200px]">
          <div className="diagnosis flex place-content-between items-center">
            <div className="icon"></div>
            <div className="detail text-center">
              <p className="font-bold text-blue-800">Diagnostic</p>
              <small className="text-gray-800">List of Diseases</small>
            </div>
            <button>view</button>
          </div>
          <div className="Drugs flex place-content-between items-center">
            <div className="icon"></div>
            <div className="detail text-center">
              <p className="font-bold text-blue-800">Drugs</p>
              <small className="text-gray-800">Pescribed medicine</small>
            </div>
            <button>view</button>
          </div>
          <div className="Tests flex place-content-between items-center">
            <div className="icon"></div>
            <div className="detail text-center">
              <p className="font-bold text-blue-800">Tests</p>
              <small className="text-gray-800">Archive of drugs</small>
            </div>
            <button>view</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientReportDisplay;

{
  /* 
      <>
      <div className=" bg-green-100  h-[300px] mt-2 ml-2 p-8 flex-grow ">
        <div className="header flex place-content-between items-center p-4 ">
          <div className="big-image flex justify-center items-center ">
            <div>
              <img
                className="w-50 h-20 "
                src="./images/kit-medical-solid.svg"
                alt="Kit Medical image"
              />
            </div>
          </div>

          <div className="report-list w-[200px]">
            <div className="diagnosis flex place-content-between items-center">
              <div className="icon"></div>
              <div className="detail text-center">
                <p className="">Diagnostic</p>
                <small className="text-gray-800">List of Diseases</small>
              </div>
              <button>view</button>
            </div>
            <div className="Drugs flex place-content-between items-center">
              <div className="icon"></div>
              <div className="detail text-center">
                <p className="">Drugs</p>
                <small className="text-gray-800">Pescribed medicine</small>
              </div>
              <button>view</button>
            </div>
            <div className="Tests flex place-content-between items-center">
              <div className="icon"></div>
              <div className="detail text-center">
                <p className="">Tests</p>
                <small className="text-gray-800">Archive of drugs</small>
              </div>
              <button>view</button>
            </div>
          </div>
        </div>
      </div>
      </> */
}
