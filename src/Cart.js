import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import CartCourses from "./CartCourses";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import "./cart.css";

export const Cart = () => {
  const STRIPE_KEY =
    "pk_test_51ImMYuDL5ibPWLMNtdmImQssUoKu1uxn2dks5bfyp520E83aU88Cdeba3Qoao2L5R7fTegUwZJtyunFfHoxUxbj000qmjBLQrO";

  const handleToken = async (token) => {
    const courses = { course_name: "All Courses", couse_price: "$12" };
    const response = await axios.post("http://localhost:8080/checkout", {
      courses,
      token,
    });
    console.log(response);
  };

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
            </Scrollbars>
          </div>
        </div>

        <div className="checkout__section">
          <h4>
            Total: <span>$2300</span>
          </h4>

          {/* Stripe checkout */}
          <StripeCheckout
            className="checkout__btn"
            stripeKey={STRIPE_KEY}
            token={handleToken}
            billingAddress
            shippingAddress
            amount="$2300"
            name="Your Courses"
          ></StripeCheckout>
        </div>
      </section>
    </>
  );
};

export default Cart;
