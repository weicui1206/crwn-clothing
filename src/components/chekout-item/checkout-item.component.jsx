import "./style.css";
import { useContext } from "react";
import { CartContext } from "./../../contexts/cart.context";

function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemToCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);
  const clearItemHandler = () => clearItemToCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>

      <span className="checkout-item-name">{name}</span>
      <span className="checkout-item-quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="checkout-item-price">{price}</span>
      <div className="checkout-item-remove-button" onClick={clearItemHandler}>
        &#x03A7;
      </div>
    </div>
  );
}

export default CheckoutItem;
