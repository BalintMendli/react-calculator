import React from 'react';
import styled from 'styled-components/macro';
import { Label, Id, Pos } from 'constants/buttons';
import { Color } from 'constants/colors';
import { getGridPos } from 'logic/utils';

interface ButtonProps {
  label: Label;
  id: Id;
  pos: Pos;
  color: Color;
  handleClick: (label: Label) => void;
}

interface StyledProps {
  color: Color;
  gridPos: [string, string];
}

const StyledButton = styled.button<StyledProps>`
  grid-column: ${({ gridPos }): string => gridPos[0]};
  grid-row: ${({ gridPos }): string => gridPos[1]};
  background: ${({ color }): string => color};
  padding: 0;
  font: inherit;
  font-size: 1.1rem;
  outline: inherit;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
  opacity: 0.85;
  transition: opacity 250ms ease-in-out;

  :hover {
    opacity: 1;
  }
`;

const Button = ({
  label,
  id,
  handleClick,
  pos,
  color,
}: ButtonProps): JSX.Element => {
  const handleBtnClick = (): void => {
    handleClick(label);
  };

  return (
    <StyledButton
      type="button"
      id={id}
      color={color}
      gridPos={getGridPos(pos)}
      onClick={handleBtnClick}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
