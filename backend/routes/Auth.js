import protectRoute from '../middleware/protectedRoute.js';
import { login, logout, signup,getUser } from '../controllers/userHandler.js';
import { Router } from 'express';
const authRouter = Router();


authRouter.post('/register', signup);
authRouter.post('/login', login);
authRouter.get('/logout',protectRoute, logout);
authRouter.get('/getuser',protectRoute, getUser);



export default authRouter;