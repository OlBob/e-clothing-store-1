import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown_logo.svg";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="signin" className="option">SIGN</Link>
        <Link to="shop" className="option">SHOP</Link>
        <Link to="contacts" className="option">CONTACTS</Link>
      </div>
    </div>
  )
}

export default Header;