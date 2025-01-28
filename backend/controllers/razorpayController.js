// import Razorpay from 'razorpay';

// const razorpayInstance = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_SECRET,
// });

// export const createRazorpayPayment = async (req, res) => {
//   const { amount } = req.body;

//   try {
//     const options = {
//       amount: amount * 100, // Amount in paise
//       currency: 'INR',
//       receipt: 'order_rcptid_11',
//     };
//     const paymentUrl = `https://checkout.razorpay.com/v1/checkout.js?order_id=${order.id}`;
//     const order = await razorpayInstance.orders.create(options);
//     res.json({ id: order.id, currency: order.currency, amount: order.amount });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
