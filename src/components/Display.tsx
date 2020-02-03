import React from 'react';
import styled from 'styled-components/macro';
import { transformForDisplay, transformError } from 'logic/utils';

interface DisplayProps {
  result: string;
  expression: string;
  error: string;
}

const StyledDisplay = styled.div`
  height: 80px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding-bottom: 3px;
  font-size: 28px;
  line-height: 1.05;
`;

const StyledError = styled.div`
  height: 18px;
  max-width: 420px;
  padding: 2px 5px;
  margin-top: 5px;
  background-color: #a5243d;
  font-size: 12px;
  border-radius: 2px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  :empty {
    visibility: hidden;
  }
`;

const StyledExp = styled.div`
  height: 22px;
  font-size: 16px;
  display: flex;
  align-items: center;
  transition: all 150ms ease-in;
  transform-origin: top right;

  :empty {
    transform: translate(-15px, 25px) scale(1.5);
    opacity: 0;
  }
`;

const Display = ({ result, expression, error }: DisplayProps): JSX.Element => (
  <StyledDisplay id="display">
    <StyledError id="error">
      {error ? transformError(error, result) : ''}
    </StyledError>
    <StyledExp id="expression">
      {expression ? `${transformForDisplay(expression)} =` : ''}
    </StyledExp>
    <div id="result">{transformForDisplay(result)}</div>
  </StyledDisplay>
);

export default Display;
