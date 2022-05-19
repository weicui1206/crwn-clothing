import "./style.css";
import { useContext } from "react";
import { CartContext } from "./../../contexts/cart.context";
import CheckoutItem from "../chekout-item/checkout-item.component";

export default function Checkout() {
  const { cartItems, cartTotal, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      {cartTotal !== 0 && (
        <span className="total">{`Total Price: $${cartTotal}`}</span>
      )}
    </div>
  );
}
