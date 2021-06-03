import React from "react";

import { Scrollbars } from "react-custom-scrollbars";
import CartCourses from "./CartCourses";
import "./cart.css";

export const Cart = () => {
  return (
    <>
      <div className="cart__main">
        <h1 className="cart__heading">Shopping Cart</h1>
      </div>

      <section className="cart__items__section">
        <h3 className="cart__count">1 Course in Cart</h3>

        <div className="cart__items">
          <div className="cart__items__container">
            <Scrollbars>
              <CartCourses />
              <CartCourses />
              {/* <CartCourses />
              <CartCourses />
              <CartCourses />
              <CartCourses />
              <CartCourses />
              <CartCourses />
              <CartCourses />
              <CartCourses /> */}
            </Scrollbars>
          </div>
        </div>

        <div className="checkout__section">
          <h4>
            Total: <span>$2300</span>
          </h4>
          {/* Strip checkout button will be here */}
          <button className="checkout__btn">Checkout</button>
        </div>
      </section>
    </>
  );
};

export default Cart;
