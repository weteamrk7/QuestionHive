// const express = require("express");
// const cors = require('cors');
// const questions = require("./data.js");
import questions from "./data.js";
import express from 'express';
import cors from 'cors';
import connectDb from "./database/connectToMongo.js";
import questionRouter from "./routes/Question.js";
import userRouter from "./routes/User.js";
import authRouter from "./routes/Auth.js";
import paymentRouter from "./routes/Payment.js";
import { configDotenv } from "dotenv";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
dotenv.config();

configDotenv();
// import bodyParser from "body-parser";

const app = express();

app.use(express.json()); 
app.use(cookieParser());
const PORT = process.env.PORT || 5000;
app.use(cors({
    origin: process.env.CLIENT_URL, // Frontend URL
    credentials: true, // Allow credentials (cookies)
}));


app.use("/api/question", questionRouter);
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/payment", paymentRouter);

connectDb()
.then(()=>{
  app.listen(PORT, () => {
  
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  
})
.catch((e)=>{
  console.log(e);
})
