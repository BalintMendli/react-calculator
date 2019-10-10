import React from 'react';
import styled from 'styled-components/macro';
import { transformForDisplay } from '../logic/utils';

interface DisplayProps {
  result: string;
}

const StyledDisplay = styled.div`
  height: 80px;
  color: #fff;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding-bottom: 10px;
  font-size: 26px;
`;

const Display = ({ result = '0' }: DisplayProps): JSX.Element => (
  <StyledDisplay>{transformForDisplay(result)}</StyledDisplay>
);

export default Display;
