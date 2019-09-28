import React from 'react';
import buttons, { Label } from '../constants/buttons';
import Display from './Display';
import Button from './Button';

interface CalculatorProps {
  result: string;
  handleClick: (label: Label) => void;
}

const Calculator = ({ result, handleClick }: CalculatorProps): JSX.Element => (
  <div id="calc-div">
    <Display result={result} />
    {buttons.map(({ label, id }) => (
      <Button key={label} label={label} id={id} handleClick={handleClick} />
    ))}
  </div>
);

export default Calculator;
