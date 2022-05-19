import "./style.css";

export default function CartItem({ cartItem }) {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} className="cart-image" />
      <div className="item-details">
        <span className="name">
          {name.length > 11 ? name.slice(0, 9) + ".." : name}
        </span>
        <span className="cart-price">
          {quantity} * ${price}
        </span>
      </div>
    </div>
  );
}
