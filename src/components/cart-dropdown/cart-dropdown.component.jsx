import React from "react";
import { connect } from "react-redux";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from '../custom-button/custom-button.component';

import { selectCartItems } from "../../redux/cart/cart.selectors";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.map(item => <CartItem key={item.id} {...item} />)
        }
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);