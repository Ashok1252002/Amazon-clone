const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
	"sk_test_51Izw7cSH78t5IQrG4rX6KO8BvgRYM3DyFiuynzWRZw9qqUZyd7dW9O8PreLyNi7OJrBCfPzLlb9sTyWARwXwS0bj00DXBMVOts",
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) =>
	response.status(200).send("Hello World!"),
);

app.post("/payments/create", async (request, response) => {
	const total = request.query.total;
	console.log("Total amount = ", total);
	const paymentIntent = await stripe.paymentIntents.create({
		amount: total, // subunits of the currency
		currency: "usd",
	});
	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-590/us-central1/api
