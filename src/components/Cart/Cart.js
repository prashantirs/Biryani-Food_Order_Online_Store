import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import "./Cart.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const hasItems = ctx.items.length > 0;

  const onRemoveItemHandler = (id) => {
      ctx.removeItem(id);
  };

  const onAddItemHandler = (item) => {
      ctx.addItem({...item, amount: 1});
  }
  const cartItems = (
    <ul className="cart-items">
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={onRemoveItemHandler.bind(null, item.id)}
          onAdd={onAddItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal hide={props.onHide}>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>₹{ctx.totalAmount.toFixed(2)}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onHide}>
          Close
        </button>
        {hasItems && <button className="button">Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
