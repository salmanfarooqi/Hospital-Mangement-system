import express from "express";
import TestAddingCollection from "../database/addTest.js";

const app = express();
export const testAdd = (req, res) => {
  const { Patientname, FName, TestType, TestDetail, testDate } = req.body;
  // console.log(Patientname, FName, TestType, TestDetail);
  // console.log(TestType);
  console.log("test date", testDate);
  const TestData = {
    patientName: Patientname,
    patientFName: FName,
    testDetail: TestDetail,
    testtype: TestType,
    date: testDate,
    status: "pending",
  };
  TestAddingCollection.insertMany([TestData]);
};
export default testAdd;
