import React from 'react';

interface DisplayProps {
  result: string;
}

const Display = ({ result = '0' }: DisplayProps): JSX.Element => (
  <div id="display">{result}</div>
);

export default Display;
