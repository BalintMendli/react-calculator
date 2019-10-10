import buttons, { Label } from '../constants/buttons';

function isLabel(key: string): key is Label {
  return buttons.some(l => l.label === key);
}

export function getLabel(key: string): Label | '' {
  let label: Label | '' = '';
  if (key === 'Enter') {
    label = '=';
  }
  if (key === '.' || key === ',' || key === 'Decimal') {
    label = '.';
  }
  if (key === 'Delete' || key === 'Backspace') {
    label = 'AC';
  }
  if (isLabel(key)) {
    label = key;
  }
  return label;
}

export function transformForDisplay(display: string): string {
  return display
    .replace(/\*/g, '×')
    .replace(/\^2/g, '²')
    .replace(/sqrt/g, '√')
    .replace(/pi/g, 'π');
}
