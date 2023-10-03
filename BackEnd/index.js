import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import patientRouter from "./routes/patientRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import specializationRouter from "./routes/specializationRoute.js";
import appointmentRouter from "./routes/appointmentRoute.js";
import PharmacyRouter from "./routes/pharmacyRoute.js";
import MedicalWardRouter from "./routes/medicalWardRoute.js";
import BloodWardRouter from "./routes/bloodWardRoute.js";
import loginRouter from "./routes/loginRoute.js";
import router from "./models/router/register.js";
import TestRouter from "./routes/testRoute.js";
import * as dotenv from "dotenv";

// import TestRouter from "./routes/testRoute.js";

// can below ones  be skipped?
import learningRouter from "./routes/learningRoute.js";
import notFound from "./controller/notFound.js";

const app = express();
dotenv.config();

// db

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.mongo_url, {
    dbName: "hospitalmanagementdb",
  });

  console.log("database conntected");
}

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());

app.use(router);

app.use(patientRouter);

app.use(doctorRouter);

app.use(specializationRouter);

app.use(appointmentRouter);

// app.use(TestRouter);

app.use(PharmacyRouter);

app.use(MedicalWardRouter);

app.use(BloodWardRouter);

app.use(loginRouter);

app.use(learningRouter);

app.use(TestRouter);

app.use("/*", notFound);

app.listen(process.env.port);
