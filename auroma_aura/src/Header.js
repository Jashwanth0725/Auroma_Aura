import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">

      {/*............................Header-logo..........................*/}
      <div className="Header-logo">
        <Link to="/">
          <img src="Images/incense.png" alt="logo" width="35px"></img>
          <b>AromaAura</b>
        </Link>
      </div>

      {/*...........................Header-search..........................*/}
      <div className="Header-search">
        <input className="search-bar" type="text" placeholder="Search..." />
        <SearchIcon className="search-symbol" />

      </div>

      {/*.........................Header-nav-bar..........................*/}
      <div className="Header-nav-bar">
        <div className="option-1">
          <span className="login">
            <Link to="/Login">Hello, Login</Link>
          </span>
        </div>

        <div className="option-2">
          <Link to="/checkout">
            <span className="Header-cart-icon">
              <ShoppingBagOutlinedIcon />
            
            <p>0</p>
            </span>
          </Link>
        </div>
      </div>

    </div>
  );
}

export default Header;
