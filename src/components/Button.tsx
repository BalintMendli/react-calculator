import React from 'react';
import styled from 'styled-components/macro';
import { Label, Id, Pos } from '../constants/buttons';

interface ButtonProps {
  label: Label;
  id: Id;
  pos: Pos;
  color: string;
  handleClick: (label: Label) => void;
}

interface StyledProps {
  color: string;
  posStrs: [string, string];
}

function getPosStrs(pos: Pos): [string, string] {
  const xPos = Array.isArray(pos.x)
    ? `${pos.x[0]} / ${pos.x[1]}`
    : pos.x.toString();
  const yPos = Array.isArray(pos.y)
    ? `${pos.y[0]} / ${pos.y[1]}`
    : pos.y.toString();
  return [xPos, yPos];
}

const StyledButton = styled.button<StyledProps>`
  grid-column: ${({ posStrs }): string => posStrs[0]};
  grid-row: ${({ posStrs }): string => posStrs[1]};
  background: ${({ color }): string => color};
  padding: 0;
  font: inherit;
  outline: inherit;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
  opacity: 0.9;

  :hover {
    border: 1px solid #91979c;
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
      posStrs={getPosStrs(pos)}
      onClick={handleBtnClick}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
