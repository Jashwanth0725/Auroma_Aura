import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

function Header() {
  return (
    <div className="Header">

      {/*............................Header-logo..........................*/}
      <div className="Header-logo">
        <a href="index.html">
          <img src="Images/incense.png" alt="logo" width="35px"></img>
          <b>AromaAura</b>
        </a>
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
            <a href="login.html">Hello, Login</a>
          </span>
        </div>

        <div className="option-2">
          <a href="login.html">
            <span className="Header-cart-icon">
              <ShoppingBagOutlinedIcon />
            
            <p>0</p>
            </span>
          </a>
        </div>
      </div>

    </div>
  );
}

export default Header;
