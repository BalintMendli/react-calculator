import React from 'react';
import { Label, Id } from '../constants/buttons';

interface ButtonProps {
  label: Label;
  id: Id;
  handleClick: (label: Label) => void;
}

const Button = ({ label, id, handleClick }: ButtonProps): JSX.Element => {
  const handleBtnClick = (): void => {
    handleClick(label);
  };

  return (
    <button type="button" id={id} className="buttons" onClick={handleBtnClick}>
      {label}
    </button>
  );
};

export default Button;
