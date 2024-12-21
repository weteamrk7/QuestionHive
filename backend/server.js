// const express = require("express");
// const cors = require('cors');
// const questions = require("./data.js");
import questions from "./data.js";
import express from 'express';
import cors from 'cors';
import connectDb from "./database/connectToMongo.js";
import questionRouter from "./routes/questionRoute.js";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser());
const PORT = 3000;



connectDb();

app.get("/api/questions", (req, res) => {
    const { category, subject, chapter } = req.query;
    
    let filteredQuestions = questions;
  
    if (category) {
      filteredQuestions = filteredQuestions.filter(q => q.category === category);
    }
    if (subject) {
      filteredQuestions = filteredQuestions.filter(q => q.subject === subject);
    }
    if (chapter) {
      filteredQuestions = filteredQuestions.filter(q => q.chapter === `Chapter ${chapter}`);
    }
  
    res.json(filteredQuestions);
  });
// Endpoint to get question by serial number
app.get("/api/questions/:serial_no",(req, res) => {
  const serialNo = parseInt(req.params.serial_no, 10);
  const question = questions.find(q => q.serial_no === serialNo);

  if (question) {
    res.json(question);
  } else { 
    res.status(404).json({ message: "Question not found" });
  }
});

app.use("/api/question", questionRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
