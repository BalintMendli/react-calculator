const buttons = [
  { label: 'AC', id: 'clear', type: 'clear' },
  { label: '/', id: 'divide', type: 'operation' },
  { label: '*', id: 'multiply', type: 'operation' },
  { label: '7', id: 'seven', type: 'number' },
  { label: '8', id: 'eight', type: 'number' },
  { label: '9', id: 'nine', type: 'number' },
  { label: '-', id: 'subtract', type: 'operation' },
  { label: '4', id: 'four', type: 'number' },
  { label: '5', id: 'five', type: 'number' },
  { label: '6', id: 'six', type: 'number' },
  { label: '+', id: 'add', type: 'operation' },
  { label: '1', id: 'one', type: 'number' },
  { label: '2', id: 'two', type: 'number' },
  { label: '3', id: 'three', type: 'number' },
  { label: '=', id: 'equals', type: 'equals' },
  { label: '0', id: 'zero', type: 'number' },
  { label: '.', id: 'decimal', type: 'decimal' },
] as const;

export type Button = typeof buttons[number];

export const labels = buttons.map(btn => btn.label);

export type Label = typeof labels[number];

export const ids = buttons.map(btn => btn.id);

export type Id = typeof ids[number];

export const btnTypes = buttons.map(btn => btn.type);

export type BtnType = typeof btnTypes[number];

export default buttons;
