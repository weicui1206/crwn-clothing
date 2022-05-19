import "./style.css";

import Button from "./../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

export default function ProductCard({ product }) {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} className="product-img" alt={`${name}`}></img>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <div className="card-button">
        <Button buttonType="inverted" onClick={addProductToCart}>
          Add to Card
        </Button>
      </div>
    </div>
  );
}
