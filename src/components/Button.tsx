import React from 'react';

const Button = ({ name }) => {
  return (
    <button type="button" id="clear" className="buttons" onClick={handleClear}>
      {name}
    </button>
  );
};

export default Button;
