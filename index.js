import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import https from "https";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const server = https.createServer(app);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB connected");

    server.listen(process.env.PORT, () =>
      console.log(`Server is listening on port ${process.env.PORT}`)
    );
  })
  .catch((err) => {
    console.log({ err });
    process.exit(1);
  });
