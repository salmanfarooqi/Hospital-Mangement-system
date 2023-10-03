import BloodAddingCollection from "../database/bloodAdding.js";
import express from "express";

const app = express();
const addBlood = (req, res) => {
  //
  const { BloodGroup, BloodQuantity, BloodDate } = req.body;
  console.log("bloodate", BloodDate);

  const BloodData = {
    bloodGroup: BloodGroup,
    bloodQuantity: BloodQuantity,
    date: BloodDate,
  };
  console.log(BloodGroup);

  BloodAddingCollection.insertMany([BloodData]);
};

export default addBlood;
