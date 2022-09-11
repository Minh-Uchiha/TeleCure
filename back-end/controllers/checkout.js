const stripe = require("stripe")(process.env.API_KEY);

const createCheckOutSession = async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.title + " " + item.dr_forename + " " + item.dr_surname,
              description: item.specialty + " advising session",
            },
            unit_amount: 6000,
          },
          quantity: 1,
        };
      }),
      success_url: `${process.env.CLIENT_URL}/success-payment`,
      cancel_url: `${process.env.CLIENT_URL}/cancel-payment`,
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports = { createCheckOutSession };
