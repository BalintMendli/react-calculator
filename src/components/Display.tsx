import React from 'react';
import styled from 'styled-components/macro';

interface DisplayProps {
  result: string;
}

const StyledDisplay = styled.div`
  grid-column: 1 / 5;
  grid-row: 1;
  color: #fff;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding-bottom: 10px;
  font-size: 26px;
`;

const Display = ({ result = '0' }: DisplayProps): JSX.Element => (
  <StyledDisplay>{result}</StyledDisplay>
);

export default Display;
