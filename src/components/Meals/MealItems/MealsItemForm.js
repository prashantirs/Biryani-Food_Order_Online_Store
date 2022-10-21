import { useRef, useState } from "react";
import InputBox from "../../UI/InputBox";
import "./MealsItemForm.css";

const MealsItemForm = (props) => {
  const [amountValid,setAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount; //convert a string to a number in JavaScript using the unary plus operator (+)
    
    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
      setAmountValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  }
  return (
    <form className="form" onSubmit={submitHandler}>
      <InputBox
        ref = {amountInputRef}
        label="Amount"
        input={{
          type: "number",
          id: "amount_" + props.id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealsItemForm;
