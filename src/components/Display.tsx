import React from 'react';
import styled from 'styled-components/macro';
import { transformForDisplay, transformError } from '../logic/utils';

interface DisplayProps {
  result: string;
  error: string;
}

const StyledDisplay = styled.div`
  height: 80px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding-bottom: 10px;
  font-size: 26px;
`;

const StyledError = styled.div`
  height: 20px;
  color: #fff;
  background-color: #a5243d;
  padding: 0 5px;
  font-size: 14px;
  border-radius: 2px;
`;

const Display = ({ result = '0', error }: DisplayProps): JSX.Element => (
  <StyledDisplay>
    {error && <StyledError>{transformError(error, result)}</StyledError>}
    <div>{transformForDisplay(result)}</div>
  </StyledDisplay>
);

export default Display;
