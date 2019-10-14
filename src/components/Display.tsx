import React from 'react';
import styled from 'styled-components/macro';
import { transformForDisplay, transformError } from '../logic/utils';

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
  justify-content: flex-end;
  padding-bottom: 3px;
  font-size: 26px;
  line-height: 1.05;
`;

const StyledError = styled.div`
  height: 20px;
  max-width: 420px;
  background-color: #a5243d;
  font-size: 14px;
  border-radius: 2px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  :not(:empty) {
    padding: 2px 5px;
  }
`;

const StyledExp = styled.div`
  height: 22px;
  font-size: 18px;
  display: flex;
  align-items: center;
`;

const Display = ({ result, expression, error }: DisplayProps): JSX.Element => (
  <StyledDisplay>
    <StyledError>{error ? transformError(error, result) : ''}</StyledError>
    <StyledExp>
      {expression ? `${transformForDisplay(expression)} =` : ''}
    </StyledExp>
    <div>{transformForDisplay(result)}</div>
  </StyledDisplay>
);

export default Display;
