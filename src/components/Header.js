import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "../css/Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

const Header = () => {
	const [{ basket, user }, dispatch] = useStateValue();
	const handleAuthentication = () => {
		if (user) {
			auth.signOut();
		}
	};

	return (
		<div className="header">
			<Link to="/">
				<img
					className="header__logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
				/>
			</Link>
			<div className="header__search">
				<input type="text" className="header__searchInput" />
				<SearchIcon className="header__searchIcon" />
			</div>
			<div className="header__nav">
				<Link to={!user && "/login"}>
					<div
						onClick={handleAuthentication}
						className="header__option"
					>
						<span className="header__optionOne">
							Hello {user ? user.email : "Guest"}
						</span>
						<span className="header__optionTwo">
							{user ? "Sign Out" : "Sign In"}
						</span>
					</div>
				</Link>
				<Link to="/orders">
					<div className="header__option">
						<span className="header__optionOne">Returns</span>
						<span className="header__optionTwo">{"&"} orders</span>
					</div>
				</Link>
				<div className="header__option">
					<span className="header__optionOne">Your</span>
					<span className="header__optionTwo">Prime</span>
				</div>
				<Link to="/checkout">
					<div className="header__optionBasket">
						<ShoppingBasketIcon />
						<span className="header__optionTwo header__basketCount">
							{basket?.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Header;
