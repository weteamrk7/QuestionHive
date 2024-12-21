import { addMultipleQuestions, addQuestion, getQuestions } from '../controllers/questionHandler.js';
import { Router } from 'express';
const questionRouter = Router();


questionRouter.post('/add-multiple-questions', addMultipleQuestions);
questionRouter.post('/add-question', addQuestion);
questionRouter.get('/getQuestions', getQuestions);


export default questionRouter;