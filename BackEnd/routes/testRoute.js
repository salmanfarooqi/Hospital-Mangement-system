import express from "express";
import testAdd from "../controller/test/testAdd.js";

const TestRouter = express.Router();

TestRouter.post("/testadd", testAdd);

export default TestRouter;
