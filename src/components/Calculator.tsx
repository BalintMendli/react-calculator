import React from 'react';
import styled from 'styled-components/macro';
import { Label } from '../constants/buttons';
import { heightPx, widthPx } from '../constants/dimensions';
import Display from './Display';
import BtnPanel from './BtnPanel';

interface CalculatorProps {
  result: string;
  handleClick: (label: Label) => void;
}

interface StyledProps {
  widthPx: number;
  heightPx: number;
}

const StyledCalculator = styled.div<StyledProps>`
  height: ${(props): string => props.heightPx.toString()}px;
  width: ${(props): string => props.widthPx.toString()}px;
  background-color: #0b0c11;
  padding: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;

const Calculator = ({ result, handleClick }: CalculatorProps): JSX.Element => (
  <StyledCalculator widthPx={widthPx} heightPx={heightPx}>
    <Display result={result} />
    <BtnPanel handleClick={handleClick} />
  </StyledCalculator>
);

export default Calculator;