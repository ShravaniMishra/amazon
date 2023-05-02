import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://i.ibb.co/y09TKqf/1597056012-CNRvas-amazon-dkblue-noto-email-v2016-us-main-CB468775337-removebg-preview.png"
        alt="logo"
      />

      <div className="search">
        <input className="header_search" type="text" placeholder="Search Amazon.in" />
        <SearchIcon className="search_icon"/>
      </div>

      <div className="header_nav">
        <div className="header_options">
          <span className="option_one"> Hello </span>
          <span className="option_two">Sign in</span>
        </div>
        <div className="header_options">
          <span className="option_one"> Returns </span>
          <span className="option_two"> & Orders </span>
        </div>
        <div className="header_options">
          <span className="option_one"> Your </span>
          <span className="option_two">Prime</span>
        </div>
      </div>
      <div className="shopping_cart">
        <ShoppingBasketIcon/>
      </div>
    </div>
  );
};

export default Header;
