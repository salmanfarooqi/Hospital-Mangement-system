// import express from "express";
// import RegistrationCollection from "../database/patientsignup.js";
// import MedicineAddingCollection from "../database/addMedicine.js";
// import BloodAddingCollection from "../database/bloodAdding.js";
// import doctorAddingCollection from "../database/doctorAdding.js";
// import TestAddingCollection from "../database/addTest.js";
// import NurseAddingCollection from "../database/AddNurse.js";
// import attendenceCollection from "../database/Attendence.js";
// import abbasMedincecollection from "../database/abbasMedicine.js";

// const app = express();
// // export const signupContoler = async (req, res) => {
// //   const { name, fname, disease, gender, age, Email, password } = req.body;

// //   let RegisterData;
// //   RegisterData = {
// //     Name: name,
// //     fatherName: fname,
// //     gender: gender,
// //     disease: disease,
// //     age: age,
// //     Email: Email,
// //     password: password,
// //   };

// //   console.log(Email);

// //   await RegistrationCollection.insertMany([RegisterData]);
// // };

// // console.log(RegisterData.Name);
// // jsut comment for testing adding medince

// // abbas medince sending collection

// export const abbasemedicene = (req, res) => {
//   const {
//     medicineName,

//     medicineQUantity,
//     testDate,
//   } = req.body;
//   // console.log(medicineQUantity);S
//   console.log(testDate);

//   const MedicineData = {
//     medicineName: medicineName,

//     date: testDate,
//     status: "pending",
//   };
//   abbasMedincecollection.insertMany([MedicineData]);
// };

// 
