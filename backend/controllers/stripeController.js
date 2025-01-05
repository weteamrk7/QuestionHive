import stripeLib from 'stripe';

const stripe = stripeLib(process.env.STRIPE_SECRET_KEY);

export const createStripePayment = async (req, res) => {
  const { amount } = req.body;
  
  try {

    const session = await stripe.checkout.sessions.create({
            submit_type : 'pay',
            mode : "payment",
            payment_method_types : ['card'],
            billing_address_collection : 'auto',
           
            customer_email : "sumitbaghel22a@gmail.com",
            metadata : {
                userId : '786786hiu6hf8'
            },  
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: { name: 'Sample Product' },
            unit_amount: amount * 100,
          },
          adjustable_quantity : {
            enabled : true,
            minimum : 1
          },
          quantity : 1
        }
        
      ],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/failure`,
    });
    res.status(200).json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
