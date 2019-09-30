import React from 'react';
import styled from 'styled-components/macro';
import { buttons, Label } from '../constants/buttons';
import { getColor } from '../constants/colors';
import Display from './Display';
import Button from './Button';

interface CalculatorProps {
  result: string;
  handleClick: (label: Label) => void;
}

const StyledCalculator = styled.div`
  background-color: #0b0c11;
  height: 420px;
  width: 300px;
  padding: 5px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto auto auto auto auto;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;

const Calculator = ({ result, handleClick }: CalculatorProps): JSX.Element => (
  <StyledCalculator>
    <Display result={result} />
    {buttons.map(btn => (
      <Button
        key={btn.label}
        label={btn.label}
        id={btn.id}
        pos={btn.position}
        color={getColor(btn)}
        handleClick={handleClick}
      />
    ))}
  </StyledCalculator>
);

export default Calculator;
