import React from "react";
import { Link } from "react-router-dom";
import "../css/Payment.css";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";

const Payment = () => {
	const [{ basket, user }, dispatch] = useStateValue();

	return (
		<div className="payment">
			<div className="payment__container">
				<h1>
					Checkout (
					{<Link to="/checkout">{basket?.length} items</Link>} )
				</h1>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__address">
						<p>{user?.email}</p>
						<p>123 street</p>
						<p>7th lane</p>
						<p>Los Angles</p>
					</div>
				</div>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Review items and Delivery</h3>
					</div>
					<div className="payment__items">
						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Payment Methods</h3>
					</div>
					<div className="payment__details"></div>
				</div>
			</div>
		</div>
	);
};

export default Payment;
