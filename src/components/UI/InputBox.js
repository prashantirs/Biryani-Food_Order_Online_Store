import React from 'react';
import './InputBox.css';

const InputBox = React.forwardRef((props,ref) => {
  return (
    <div className='input' >
      <label >{props.label}</label>
      <input ref={ref} {...props.input}/>
    </div>
  );
});

export default InputBox;
