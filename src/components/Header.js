import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "../css/Header.css";

const Header = () => {
	return (
		<div className="header">
			<img
				className="header__logo"
				src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
			/>
			<div className="header__search">
				<input type="text" className="header__searchInput" />
				<SearchIcon className="header__searchIcon" />
			</div>
			<div className="header__nav">
				<div className="header__option">
					<span className="header__optionOne">Hello Guest</span>
					<span className="header__optionTwo">Sign In</span>
				</div>
				<div className="header__option">
					<span className="header__optionOne">Returns</span>
					<span className="header__optionTwo">{"&"} orders</span>
				</div>
				<div className="header__option">
					<span className="header__optionOne">Your</span>
					<span className="header__optionTwo">Prime</span>
				</div>
				<div className="header__optionBasket">
					<ShoppingBasketIcon />
					<span className="header__optionTwo header__basketCount">
						0
					</span>
				</div>
			</div>
		</div>
	);
};

export default Header;
