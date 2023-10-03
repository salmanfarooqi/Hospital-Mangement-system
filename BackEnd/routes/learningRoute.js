import express from "express";
import createLearning from "../controller/learning/createLearning.js";
import changeLearning from "../controller/learning/changeLearning.js";
import getLearnings from "../controller/learning/getLearnings.js";

const learningRouter = express.Router();

learningRouter.get("/getlearnings", getLearnings);

learningRouter.post("/createlearning", createLearning);

learningRouter.put("/changelearning", changeLearning);

export default learningRouter;
