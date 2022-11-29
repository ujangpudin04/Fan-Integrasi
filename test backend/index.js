import express from "express";
import db from "./config/database.js";
import Users from "./models/userModels.js";
import Epresence from "./models/epresence.js";
import router from "./routes/index.js";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const port = 5000;

try {
  await db.authenticate();
  console.log("database connected..😉");
  await Users.sync();
  await Epresence.sync();
} catch (error) {
  console.log(error);
}

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Server Running on //http:localhost:${port}`);
});
