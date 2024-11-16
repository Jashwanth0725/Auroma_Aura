import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';

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
            <a href="login.html">
              <img src="../Images/user.png" width="15px"></img>Login
            </a>
          </span>
        </div>

        <div className="option-2">
          <span className="cart">
            <a href="cart.html">
              <img src="../Images/cart.png" width="20px"></img> Cart
            </a>
          </span>
        </div>

      </div>
    </div>
  );
}

export default Header;
