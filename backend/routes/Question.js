
import { addMultipleQuestions, addQuestion, getQuestions,getChapters } from '../controllers/questionHandler.js';
import { Router } from 'express';
const questionRouter = Router();


questionRouter.post('/add-multiple-questions', addMultipleQuestions);
questionRouter.post('/add-question', addQuestion);
questionRouter.get('/getQuestions', getQuestions);
questionRouter.get('/getChapters', getChapters);


export default questionRouter;