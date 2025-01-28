import protectRoute from '../middleware/protectedRoute.js';
import { updateCredits,forgotPassword } from '../controllers/userHandler.js';
import { Router } from 'express';
const userRouter = Router();

userRouter.post('/update-credits',protectRoute, updateCredits);
userRouter.post('/forgot-password', forgotPassword);



export default userRouter;