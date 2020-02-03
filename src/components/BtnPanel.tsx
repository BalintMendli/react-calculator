import React from 'react';
import styled from 'styled-components/macro';
import buttons, { Label } from 'constants/buttons';
import { getColor } from 'constants/colors';
import { rows, columns } from 'constants/dimensions';
import { getDimStyle } from 'logic/utils';
import Button from './Button';

interface BtnPanelProps {
  handleClick: (label: Label) => void;
}

interface StyledProps {
  width: number;
  height: number;
}

const StyledBtnPanel = styled.div<StyledProps>`
  background-color: #0b0c11;
  flex: 1;
  display: grid;
  grid-template-columns: ${(props): string => getDimStyle(props.width)};
  grid-template-rows: ${(props): string => getDimStyle(props.height)};
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;

const BtnPanel = ({ handleClick }: BtnPanelProps): JSX.Element => (
  <StyledBtnPanel id="btn-panel" width={columns} height={rows}>
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
  </StyledBtnPanel>
);

export default BtnPanel;
