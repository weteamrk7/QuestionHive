import express from 'express';
import { createStripePayment } from '../controllers/stripeController.js';
// import { createRazorpayPayment } from '../controllers/razorpayController.js';

const paymentRouter = express.Router();

paymentRouter.post('/stripe', createStripePayment);
// paymentRouter.post('/razorpay', createRazorpayPayment);

export default paymentRouter;
