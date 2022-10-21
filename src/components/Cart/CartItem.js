import './CartItem.css'


const CartItem = (props) => {
    const price = `₹${props.price.toFixed(2)}`;
  
    return (
      <li className="cart-item">
        <div>
          <h2>{props.name}</h2>
          <div className="cart-item_summary">
            <span className="cart-item_price">{price}</span>
            <span className="cart-item_amount">x {props.amount}</span>
          </div>
        </div>
        <div className="cart-item_actions">
          <button onClick={props.onRemove}>−</button>
          <button onClick={props.onAdd}>+</button>
        </div>
      </li>
    );
  };

export default CartItem