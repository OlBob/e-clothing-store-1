import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assets/crown_logo.svg";

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => {
  // debugger
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="shop" className="option">SHOP</Link>
        <Link to="contacts" className="option">CONTACTS</Link>
        {
          currentUser ?
            <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
            :
            <Link to="signin" className="option">SIGN</Link>
        }
        <CartIcon />
      </div>
      {
        hidden ? null : <CartDropdown />
      }
    </div>
  )
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header);