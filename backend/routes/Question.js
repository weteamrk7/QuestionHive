
import { addMultipleQuestions, addQuestion, getQuestions,getChapters, deleteQuestion } from '../controllers/questionHandler.js';
import { Router } from 'express';
const questionRouter = Router();


questionRouter.post('/add-multiple-questions', addMultipleQuestions);
questionRouter.post('/add-question', addQuestion);
questionRouter.get('/getQuestions', getQuestions);
questionRouter.get('/getChapters', getChapters);
questionRouter.post('/delete-question/:id', deleteQuestion);


export default questionRouter;