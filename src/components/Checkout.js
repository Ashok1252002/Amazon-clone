import React from "react";
import Subtotal from "./Subtotal";
import "../css/Checkout.css";
import { useStateValue } from "../StateProvider";

const Checkout = () => {
	const [{ basket }, dispatch] = useStateValue();

	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					className="checkout__ad"
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
					alt=""
				/>
				<div className="checkout__title">
					<h2>Your shopping basket</h2>
				</div>
			</div>
			<div className="checkout__right">
				<Subtotal />
			</div>
		</div>
	);
};

export default Checkout;
