import React from 'react';

const Calculator = (props) => (
   <div id="calc-div">
      <div id="display">{props.display}</div>
      <div id="clear" className="buttons" onClick={props.handleClear}>AC</div>
      <div id="divide" className="buttons" onClick={props.handleOp}>/</div>
      <div id="multiply" className="buttons" onClick={props.handleOp}>*</div>
      <div id="seven" className="buttons" onClick={props.handleNum}>7</div>
      <div id="eight" className="buttons" onClick={props.handleNum}>8</div>
      <div id="nine" className="buttons" onClick={props.handleNum}>9</div>
      <div id="subtract" className="buttons" onClick={props.handleOp}>-</div>
      <div id="four" className="buttons" onClick={props.handleNum}>4</div>
      <div id="five" className="buttons" onClick={props.handleNum}>5</div>
      <div id="six" className="buttons" onClick={props.handleNum}>6</div>
      <div id="add" className="buttons" onClick={props.handleOp}>+</div>
      <div id="one" className="buttons" onClick={props.handleNum}>1</div>
      <div id="two" className="buttons" onClick={props.handleNum}>2</div>
      <div id="three" className="buttons" onClick={props.handleNum}>3</div>
      <div id="equals" className="buttons" onClick={props.handleEval}>=</div>
      <div id="zero" className="buttons" onClick={props.handleNum}>0</div>
      <div id="decimal" className="buttons" onClick={props.handlePoint}>.</div>
   </div>
);

export default Calculator;