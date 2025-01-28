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

configDotenv();
// import bodyParser from "body-parser";

const app = express();

app.use(express.json()); 
app.use(cookieParser());
const PORT = process.env.PORT || 5000;
app.use(cors({
    origin: "http://localhost:5173", // Frontend URL
    credentials: true, // Allow credentials (cookies)
}));





// app.get("/api/questions", (req, res) => {
//     const { category, subject, chapter } = req.query;
    
//     let filteredQuestions = questions;
  
//     if (category) {
//       filteredQuestions = filteredQuestions.filter(q => q.category === category);
//     }
//     if (subject) {
//       filteredQuestions = filteredQuestions.filter(q => q.subject === subject);
//     }
//     if (chapter) {
//       filteredQuestions = filteredQuestions.filter(q => q.chapter === `Chapter ${chapter}`);
//     }
  
//     res.json(filteredQuestions);
//   });
// // Endpoint to get question by serial number
// app.get("/api/questions/:serial_no",(req, res) => {
//   const serialNo = parseInt(req.params.serial_no, 10);
//   const question = questions.find(q => q.serial_no === serialNo);

//   if (question) {
//     res.json(question);
//   } else { 
//     res.status(404).json({ message: "Question not found" });
//   }
// });

app.use("/api/question", questionRouter);
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/payment", paymentRouter);

app.listen(PORT, () => {
  connectDb();
  console.log(`Server is running on http://localhost:${PORT}`);
});
