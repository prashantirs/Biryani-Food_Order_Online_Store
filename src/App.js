import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState(false);

  const showCartHandler = () => {
    setCart(true);
  }

  const hideCartHandler = () => {
    setCart(false);
  }

  return (
    <>
      {cart && <Cart onHide={hideCartHandler}/>}
      <Header onShow={showCartHandler}/>
      <Meals />
    </>
  );
}

export default App;
