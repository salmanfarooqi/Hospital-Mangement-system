import { useState } from "react";

import {
  handleSuggestInjectionClick,
  handleSuggestTestClick,
  handleSuggestBloodClick,
  handleSuggestTreatmentClick,
} from "./utils";

const SuggestingTestOrTreatment = (props) => {
  const [test, setTest] = useState(null);
  const [testDescription, setTestDescription] = useState(null);
  //
  const [injection, setInjection] = useState(null);
  const [injectionDescription, setInjectionDescription] = useState(null);

  //
  const [bloodGroup, setBloodGroup] = useState("A+");
  const [bloodQuantity, setBloodQuantity] = useState(1);

  const [showSuggestMedicine, setShowSuggestMedicine] = useState(false);
  const [showSuggestTestOrInjections, setShowSuggestTestOrInjections] =
    useState(false);
  const [showSuggestTest, setShowSuggestTest] = useState(false);
  const [showSuggestBlood, setShowSuggestBlood] = useState(false);
  const [showSuggestInjections, setShowSuggestInjections] = useState(false);

  //
  const [medicines, setMedicines] = useState([]);
  const [medicineName, setMedicineName] = useState("");
  const [medicineDescription, setMedicineDescription] = useState("");
  const [medicineQuantity, setMedicineQuantity] = useState("");

  // Handle Medicine Name Change
  const handleMedicineNameChange = (e) => {
    setMedicineName(e.target.value);
    setMedicineQuantity(1);
  };

  // Adding another medicine
  const addMedicine = (e) => {
    e.preventDefault();
    const newMedicine = {
      medicineName: medicineName,
      medicineQuantity: medicineQuantity,
    };
    setMedicines([...medicines, newMedicine]);
    setMedicineName("");
    setMedicineQuantity("");
  };

  return (
    <>
      <div className=" bg-white  ml-2 p-2 pt-0 pb-1 mb-2  w-[80vw]">
        <div className="header flex place-content-between p-4 ">
          <h1 className="text-lg font-bold">Suggest Test or Treatment</h1>
        </div>
        {props.allData.selectedPatient.length > 0
          ? props.allData.selectedPatient.map((item, index) => (
              <>
                <table className="border-collapse min-w-[100%] " key={index}>
                  <thead className="text-black font-bold ">
                    <tr>
                      {/* <th className="py-4">Picture</th> */}
                      <th className="py-4">Name</th>
                      <th className="py-4">Father Name</th>
                      <th className="py-4">Age</th>
                      <th className="py-4">Appointment Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="odd:bg-white even:bg-slate-50 hover:bg-gray-300">
                      {/* Picture */}
                      {/* <td className="py-2 text-center">
                        <div className="flex flex-shrink-0 justify-center content-center">
                          
                          <img
                            className="w-[60px] h-[60px] rounded-full"
                            src="../images/patients/michael.png"
                            alt="Neil image"
                          ></img>
                        </div>
                      </td> */}
                      {/* Patient Name */}
                      <td className="py-2 text-center">
                        {typeof item.patientId === "object" &&
                        item.patientId !== null
                          ? item.patientId.firstName +
                            " " +
                            item.patientId.lastName
                          : "null"}
                      </td>
                      {/* Father Name */}
                      <td className="py-2 text-center">
                        {typeof item.patientId === "object" &&
                        item.patientId !== null
                          ? item.patientId.fatherName
                          : ""}
                      </td>
                      {/* Age */}
                      <td className="py-2 text-center">{item.patientId.age}</td>
                      {/* Appointment Date */}
                      <td className="py-2 text-center">
                        {/* {item.timeStart} - {item.timeEnd}{" "}
                        {item.appointmentTime.getUTCDate()}-
                        {item.appointmentTime.getUTCMonth() + 1}-
                        {item.appointmentTime.getUTCFullYear()}{" "} */}
                        {item.appointmentTime.split("T")[0]}
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Previous Detail */}

                {/* Test Details */}
                {item.testArr.length > 0
                  ? item.testArr.map((item, index) => {
                      return (
                        <div className="my-4 ">
                          <h1 className="text-blue-800 text-lg font-bold">
                            Test Detail {index + 1}:
                          </h1>
                          {/* Test Detail */}
                          <div className="Test Detail pl-3">
                            <div className="testNameAndReport">
                              {/* Test Name */}
                              <div className="TestName flex ">
                                <h2 className="font-bold pr-2">Test Name: </h2>
                                <h2>{item.testtype}</h2>
                              </div>

                              {/* Test Report file */}
                              <div className="Test Report file flex ">
                                <h2 className="font-bold pr-2">
                                  Test Report file:{" "}
                                </h2>
                                <h2>file</h2>
                              </div>
                            </div>

                            {/* Test Description */}
                            <div className="Test Description flex ">
                              <h2 className="font-bold pr-2">
                                Test Description:{" "}
                              </h2>
                              <h2>{item.testDetail}</h2>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : ""}

                {/* Injections Details */}
                {item.medicalWardArr.length > 0
                  ? item.medicalWardArr.map((item, index) => {
                      return (
                        <div className="my-4 ">
                          <h1 className="text-blue-800 text-lg font-bold">
                            Injections Detail {index + 1}:
                          </h1>
                          {/* Injections Detail */}
                          <div className="Injections Detail pl-3">
                            {/* Injections Name */}
                            <div className="InjectionsName flex ">
                              <h2 className="font-bold pr-2">
                                Injections Name:{" "}
                              </h2>
                              <h2>{item.emergencyMedicineName}</h2>
                            </div>

                            {/* Injections Description */}
                            <div className="Injections Description flex ">
                              <h2 className="font-bold pr-2">
                                Injections Description:{" "}
                              </h2>
                              <h2>{item.emergencyMedicineDescription}</h2>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : ""}

                {/* Blood Details */}
                {item.bloodWardArr.length > 0
                  ? item.bloodWardArr.map((item, index) => {
                      return (
                        <div className="my-4 ">
                          <h1 className="text-blue-800 text-lg font-bold">
                            Blood Detail {index + 1}:
                          </h1>
                          {/* Blood Detail */}
                          <div className="Blood Detail pl-3">
                            {/* Blood Group Name */}
                            <div className="BloodName flex ">
                              <h2 className="font-bold pr-2">Blood Group: </h2>
                              <h2>{item.bloodGroup}</h2>
                            </div>

                            {/* Blood Description */}
                            <div className="Blood Description flex ">
                              <h2 className="font-bold pr-2">
                                Blood Quantity:{" "}
                              </h2>
                              <h2>{item.bloodQuantity}</h2>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : ""}

                {/* Suggest Medicine or Suggest Test or Injections */}
                {!showSuggestMedicine && !showSuggestTestOrInjections ? (
                  <div className="Suggest Medicine or Suggest Test or Injection flex place-content-around my-8">
                    <button
                      className="form-control mb-3 p-2 bg-red-600 hover:bg-red-800 text-white font-bold w-64 transition ease-in duration-200 text-center text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                      onClick={() => {
                        props.allData.setSelectedPatient([]);
                      }}
                    >
                      Back
                    </button>
                    <button
                      className="form-control mb-3 p-2 bg-blue-700 hover:bg-blue-900 text-white font-bold w-64 transition ease-in duration-200 text-center text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                      onClick={() => {
                        setShowSuggestMedicine(true);
                      }}
                    >
                      Suggest Medicine
                    </button>
                    <button
                      className="form-control mb-3 p-2 bg-blue-700 hover:bg-blue-900 text-white font-bold w-64 transition ease-in duration-200 text-center text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                      onClick={() => {
                        setShowSuggestTestOrInjections(true);
                      }}
                    >
                      Suggest Test or Injections
                    </button>
                  </div>
                ) : (
                  ""
                )}

                {/* Suggesting Test */}
                {showSuggestTestOrInjections ? (
                  <>
                    {/* Suggest Medicine or Suggest Test or Injections */}
                    {!showSuggestTest &&
                    !showSuggestInjections &&
                    !showSuggestBlood ? (
                      <>
                        <div className="Suggest Test or Suggest Blood or Suggest Injection flex place-content-around mt-8 mb-2">
                          <button
                            className="form-control mb-3 p-2 bg-blue-700 hover:bg-blue-900 text-white font-bold w-56 transition ease-in duration-200 text-center text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                            onClick={() => {
                              setShowSuggestTest(true);
                            }}
                          >
                            Suggest Test
                          </button>
                          <button
                            className="form-control mb-3 p-2 bg-blue-700 hover:bg-blue-900 text-white font-bold w-56 transition ease-in duration-200 text-center text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                            onClick={() => {
                              setShowSuggestBlood(true);
                            }}
                          >
                            Suggest Blood
                          </button>
                          <button
                            className="form-control mb-3 p-2 bg-blue-700 hover:bg-blue-900 text-white font-bold w-56 transition ease-in duration-200 text-center text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                            onClick={() => {
                              setShowSuggestInjections(true);
                            }}
                          >
                            Suggest Injection
                          </button>
                        </div>
                        {/* Back Button */}
                        <div className="Back button mb-4 flex justify-center">
                          <button
                            className="form-control mb-3 p-2 bg-red-600 hover:bg-red-800 text-white font-bold w-64 transition ease-in duration-200 text-center text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                            onClick={() => {
                              setShowSuggestTestOrInjections(false);
                            }}
                          >
                            Back
                          </button>
                        </div>
                      </>
                    ) : (
                      ""
                    )}

                    {/* Suggesting Test & Test Description */}
                    {showSuggestTest ? (
                      <>
                        <div className="my-5 Suggesting Test & Test Description">
                          <h1 className="text-blue-800 text-lg font-bold">
                            Suggest Test
                          </h1>
                          <div className="test flex-col place-content-around m-2 mt-2">
                            {/* Suggest Test Name */}
                            <div className="suggest Test flex content-center">
                              <label htmlFor="test" className="w-24 mt-2">
                                Test Name:
                              </label>
                              <input
                                className="form-control mb-3 p-2 "
                                type="text"
                                name="test"
                                required
                                id="test"
                                placeholder="Suggest test names here...,"
                                onChange={(e) => {
                                  setTest(e.target.value);
                                }}
                              />
                            </div>
                            {/* Suggest Description */}
                            <div className="Test Description flex content-center">
                              <label
                                htmlFor="testDescription"
                                className="w-36 mt-2"
                              >
                                Test Description:
                              </label>
                              <input
                                className="form-control mb-3 p-2 "
                                type="text"
                                name="testDescription"
                                required
                                id="testDescription"
                                placeholder="Write Test Description here...,"
                                onChange={(e) => {
                                  setTestDescription(e.target.value);
                                }}
                              />
                            </div>

                            {/* Suggest Test Button */}
                            <div className="SuggestTestButton flex place-content-around">
                              {/* Back Button */}
                              <div className="Back button mb-4"></div>
                              <button
                                className="form-control mb-3 p-2 bg-red-600 hover:bg-red-800 text-white font-bold w-64 transition ease-in duration-200 text-center text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                                onClick={() => {
                                  setShowSuggestTest(false);
                                }}
                              >
                                Back
                              </button>
                              <button
                                className="form-control mb-3 p-2 bg-blue-700 hover:bg-blue-900 text-white font-bold w-64 transition ease-in duration-200 text-center text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                                onClick={() => {
                                  handleSuggestTestClick(
                                    item,
                                    test,
                                    testDescription,
                                    props
                                  );
                                  // Appear the new finished upcoming patient
                                  setShowSuggestMedicine(false);
                                  setShowSuggestTestOrInjections(false);
                                }}
                              >
                                Suggest Test
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      ""
                    )}

                    {/* Suggesting Injections / Drips*/}
                    {showSuggestInjections ? (
                      <>
                        <div className="my-5 Suggesting Injection & Injection Description">
                          <h1 className="text-lg font-bold">
                            Suggest Injection
                          </h1>
                          <div className="test flex-col place-content-around m-2 mt-2">
                            {/* Suggest Injection Name */}
                            <div className="suggest Injection flex content-center">
                              <label htmlFor="injection" className="w-36 mt-2">
                                Injection Name:
                              </label>
                              <input
                                className="form-control mb-3 p-2 "
                                type="text"
                                name="injection"
                                id="injection"
                                required
                                placeholder="Suggest injection names here...,"
                                onChange={(e) => {
                                  setInjection(e.target.value);
                                }}
                              />
                            </div>

                            {/* Suggest Injection Description */}
                            <div className="Injection Description flex content-center">
                              <label
                                htmlFor="testDescription"
                                className="w-52 mt-2"
                              >
                                Injection Description:
                              </label>
                              <input
                                className="form-control mb-3 p-2 "
                                type="text"
                                name="injectionDescription"
                                id="injectionDescription"
                                required
                                placeholder="Write Injection Description here...,"
                                onChange={(e) => {
                                  setInjectionDescription(e.target.value);
                                }}
                              />
                            </div>

                            {/* Suggest Injection Button */}
                            <div className="SuggestInjectionButton flex place-content-around">
                              {/* Back Button */}
                              <div className="Back button mb-4"></div>
                              <button
                                className="form-control mb-3 p-2 bg-red-600 hover:bg-red-800 text-white font-bold w-64 transition ease-in duration-200 text-center text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                                onClick={() => {
                                  setShowSuggestInjections(false);
                                }}
                              >
                                Back
                              </button>
                              <button
                                className="form-control mb-3 p-2 bg-blue-700 hover:bg-blue-900 text-white font-bold w-64 transition ease-in duration-200 text-center text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                                onClick={() => {
                                  handleSuggestInjectionClick(
                                    item,
                                    injection,
                                    injectionDescription,
                                    props
                                  );
                                  // Appear the new finished upcoming patient
                                  setShowSuggestMedicine(false);
                                  setShowSuggestTestOrInjections(false);
                                }}
                              >
                                Suggest Injection
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      ""
                    )}

                    {/* Suggesting Blood*/}
                    {showSuggestBlood ? (
                      <>
                        <div className="my-5 Suggesting Blood Group & Blood Quantity">
                          <h1 className="text-lg font-bold">
                            Suggest Blood Group
                          </h1>
                          <div className="Blood flex-col place-content-around m-2 mt-2">
                            {/* Suggest Blood Group */}
                            <div className="suggest Blood flex content-center">
                              <label htmlFor="blood" className="w-36 mt-2">
                                Blood Group:
                              </label>
                              <select
                                className="form-control mb-3 p-2 "
                                name="blood"
                                id="blood"
                                onChange={(e) => {
                                  setBloodGroup(e.target.value);
                                }}
                              >
                                <option value="A+" defaultChecked>
                                  A+
                                </option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                              </select>
                            </div>

                            {/* Suggest Blood Quantity */}
                            <div className="Blood Quantity flex content-center">
                              <label
                                htmlFor="bloodQuantity"
                                className="w-52 mt-2"
                              >
                                Blood Quantity:
                              </label>
                              <input
                                className="form-control mb-3 p-2 "
                                type="number"
                                defaultValue={1}
                                min={1}
                                max={7}
                                name="bloodQuantity"
                                id="bloodQuantity"
                                onChange={(e) => {
                                  setBloodQuantity(e.target.value);
                                }}
                              />
                            </div>

                            {/* Suggest Blood Button */}
                            <div className="SuggestBloodButton flex place-content-around">
                              {/* Back Button */}
                              <div className="Back button mb-4"></div>
                              <button
                                className="form-control mb-3 p-2 bg-red-600 hover:bg-red-800 text-white font-bold w-64 transition ease-in duration-200 text-center text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                                onClick={() => {
                                  setShowSuggestBlood(false);
                                }}
                              >
                                Back
                              </button>
                              <button
                                className="form-control mb-3 p-2 bg-blue-700 hover:bg-blue-900 text-white font-bold w-64 transition ease-in duration-200 text-center text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                                onClick={() => {
                                  handleSuggestBloodClick(
                                    item,
                                    bloodGroup,
                                    bloodQuantity,
                                    props,
                                    setBloodGroup,
                                    setBloodQuantity
                                  );

                                  // Appear the new finished upcoming patient
                                  setShowSuggestMedicine(false);
                                  setShowSuggestTestOrInjections(false);
                                }}
                              >
                                Suggest Blood
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                  </>
                ) : (
                  ""
                )}

                {/* Treatment Suggesting Medicine */}
                {showSuggestMedicine ? (
                  <>
                    <div className="Suggest Medicine Treatment p-3 ">
                      <h2 className="font-bold mb-1">Suggest Medicine:</h2>
                      <form onSubmit={addMedicine}>
                        <div className="flex place-content-around">
                          <input
                            type="text"
                            placeholder="Write Medicine name here"
                            // className=" rounded-lg  flex-1 appearance-none border border-black w-44 py-1 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:to-blue-900 focus:border-transparent mr-2"
                            className="form-control mb-3 p-2 w-[500px]"
                            value={medicineName}
                            required
                            onChange={handleMedicineNameChange}
                          />
                          <input
                            type="number"
                            placeholder="Quantity"
                            // className=" rounded-lg  appearance-none border border-black w-64 py-1 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:to-blue-900 focus:border-transparent mr-2"
                            className="form-control mb-3 p-2 w-[300px]"
                            min={1}
                            value={medicineQuantity}
                            onChange={(e) =>
                              setMedicineQuantity(e.target.value)
                            }
                          />
                          <button
                            type="submit"
                            className="py-1 px-6  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
                          >
                            Add Medicine
                          </button>
                        </div>
                      </form>
                      <h3 className="mt-2 font-bold">Prescribed Medicines:</h3>
                      {medicines.length > 0 ? (
                        <div className=" p-2">
                          <ul>
                            {medicines.map((medicine, index) => (
                              <li key={index}>
                                Medicine:{" "}
                                <span className="text-black font-bold">
                                  {medicine.medicineName}
                                </span>{" "}
                                | Quantity:{" "}
                                <span className="text-black font-bold">
                                  {medicine.medicineQuantity}
                                </span>
                              </li>
                            ))}
                          </ul>
                          <div className="medicineDescription py-2">
                            <h2 className="font-bold mb-1">
                              Medicine Description:
                            </h2>

                            <input
                              type="text"
                              placeholder="Dosage & frequency of medicine...,"
                              // className=" rounded-lg  appearance-none border border-black w-96 py-1 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:to-blue-900 focus:border-transparent mr-2"
                              className="form-control mb-3 p-2 "
                              onChange={(e) => {
                                setMedicineDescription(e.target.value);
                              }}
                            />

                            {/* Suggest Medicine Button */}
                            <div className="flex place-content-center">
                              <button
                                className=" py-2 px-6  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg mt-2"
                                onClick={() => {
                                  handleSuggestTreatmentClick(
                                    item,
                                    medicineName,
                                    medicineQuantity,
                                    medicineDescription,
                                    props
                                  );

                                  // Appear the new finished upcoming patient
                                  setShowSuggestMedicine(false);
                                  setShowSuggestTestOrInjections(false);
                                }}
                              >
                                Suggest Above Medicine to Patient
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        "Zero Medicine is Added"
                      )}
                    </div>
                    {/* Back Button */}
                    <div className="Back button mb-4 flex justify-center">
                      <button
                        className="form-control mb-3 p-2 bg-red-600 hover:bg-red-800 text-white font-bold w-64 transition ease-in duration-200 text-center text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                        onClick={() => {
                          setShowSuggestMedicine(false);
                        }}
                      >
                        Back
                      </button>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </>
            ))
          : "No Appointment has been finished till now."}
      </div>
    </>
  );
};

export default SuggestingTestOrTreatment;
