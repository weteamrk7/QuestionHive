import protectRoute from '../middleware/protectedRoute.js';
import { updateCredits } from '../controllers/userHandler.js';
import { Router } from 'express';
const userRouter = Router();

userRouter.post('/update-credits',protectRoute, updateCredits);



export default userRouter;