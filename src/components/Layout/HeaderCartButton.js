import React, { useContext, useEffect, useState } from "react";
import "./HeaderCartButton.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnHighlight, setbtnHighlight] = useState(false);

  const ctx = useContext(CartContext);
  const myCustomClass = `button_top ${btnHighlight ? "bump" : ""}`;

  useEffect(() => {

    if (ctx.items.length === 0) {
      return;
    }

    setbtnHighlight(true);

    const timer = setTimeout(() => {
      setbtnHighlight(false);
    }, 300);

    //cleanup function
    return ()=>{
      clearTimeout(timer);
    };

  }, [ctx.items]);

  return (
    <button className={myCustomClass} onClick={props.onShow}>
      <span className="icon_top">
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className="badge">
        {ctx.items.reduce((acc, curr) => {
          return acc + curr.amount;
        }, 0)}
      </span>
    </button>
  );
};

export default HeaderCartButton;
