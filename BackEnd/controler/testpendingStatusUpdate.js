import express from "express";
import TestAddingCollection from "../database/addTest.js";

const app = express();

const testpendingStatusUpdate = async (req, res) => {
  const { _id, status } = req.body;
  const result = await TestAddingCollection.findByIdAndUpdate(
    { _id },
    {
      $set: {
        status: "process",
      },
    }
  );
  console.log(result);
};
export default testpendingStatusUpdate;
