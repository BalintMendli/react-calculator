import React from 'react';
import PropTypes from 'prop-types';

const Calculator = ({
  display,
  handleClear,
  handleEval,
  handleNum,
  handleOp,
  handlePoint,
}) => (
  <div id="calc-div">
    <div id="display">{display}</div>
    <button type="button" id="clear" className="buttons" onClick={handleClear}>
      AC
    </button>
    <button type="button" id="divide" className="buttons" onClick={handleOp}>
      /
    </button>
    <button type="button" id="multiply" className="buttons" onClick={handleOp}>
      *
    </button>
    <button type="button" id="seven" className="buttons" onClick={handleNum}>
      7
    </button>
    <button type="button" id="eight" className="buttons" onClick={handleNum}>
      8
    </button>
    <button type="button" id="nine" className="buttons" onClick={handleNum}>
      9
    </button>
    <button type="button" id="subtract" className="buttons" onClick={handleOp}>
      -
    </button>
    <button type="button" id="four" className="buttons" onClick={handleNum}>
      4
    </button>
    <button type="button" id="five" className="buttons" onClick={handleNum}>
      5
    </button>
    <button type="button" id="six" className="buttons" onClick={handleNum}>
      6
    </button>
    <button type="button" id="add" className="buttons" onClick={handleOp}>
      +
    </button>
    <button type="button" id="one" className="buttons" onClick={handleNum}>
      1
    </button>
    <button type="button" id="two" className="buttons" onClick={handleNum}>
      2
    </button>
    <button type="button" id="three" className="buttons" onClick={handleNum}>
      3
    </button>
    <button type="button" id="equals" className="buttons" onClick={handleEval}>
      =
    </button>
    <button type="button" id="zero" className="buttons" onClick={handleNum}>
      0
    </button>
    <button
      type="button"
      id="decimal"
      className="buttons"
      onClick={handlePoint}
    >
      .
    </button>
  </div>
);

Calculator.propTypes = {
  display: PropTypes.string.isRequired,
  handleClear: PropTypes.func.isRequired,
  handleEval: PropTypes.func.isRequired,
  handleNum: PropTypes.func.isRequired,
  handleOp: PropTypes.func.isRequired,
  handlePoint: PropTypes.func.isRequired,
};

export default Calculator;
