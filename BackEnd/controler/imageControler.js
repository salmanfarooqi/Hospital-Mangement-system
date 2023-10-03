import express from "express";
import imgCollection from "../database/imagedatabase.js";
const app = express();

const imageFun = (req, res) => {
  const { uploadImage } = req.body;
  console.log("wawo", uploadImage);
  const data = {
    image: uploadImage,
  };
  imgCollection.insertMany([data]);
  console.log("image", image);
};
export default imageFun;
