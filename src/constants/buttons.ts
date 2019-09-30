export const buttons = [
  { label: 'AC', id: 'clear', type: 'clear', position: { x: [1, 3], y: 2 } },
  { label: '/', id: 'divide', type: 'operation', position: { x: 3, y: 2 } },
  { label: '*', id: 'multiply', type: 'operation', position: { x: 4, y: 2 } },
  { label: '7', id: 'seven', type: 'number', position: { x: 1, y: 3 } },
  { label: '8', id: 'eight', type: 'number', position: { x: 2, y: 3 } },
  { label: '9', id: 'nine', type: 'number', position: { x: 3, y: 3 } },
  { label: '-', id: 'subtract', type: 'operation', position: { x: 4, y: 3 } },
  { label: '4', id: 'four', type: 'number', position: { x: 1, y: 4 } },
  { label: '5', id: 'five', type: 'number', position: { x: 2, y: 4 } },
  { label: '6', id: 'six', type: 'number', position: { x: 3, y: 4 } },
  { label: '+', id: 'add', type: 'operation', position: { x: 4, y: 4 } },
  { label: '1', id: 'one', type: 'number', position: { x: 1, y: 5 } },
  { label: '2', id: 'two', type: 'number', position: { x: 2, y: 5 } },
  { label: '3', id: 'three', type: 'number', position: { x: 3, y: 5 } },
  { label: '=', id: 'equals', type: 'equals', position: { x: 4, y: [5, 7] } },
  { label: '0', id: 'zero', type: 'number', position: { x: [1, 3], y: 6 } },
  { label: '.', id: 'decimal', type: 'decimal', position: { x: 3, y: 6 } },
] as const;

export type Button = typeof buttons[number];

export const labels = buttons.map(btn => btn.label);

export type Label = typeof labels[number];

const ids = buttons.map(btn => btn.id);

export type Id = typeof ids[number];

const btnTypes = buttons.map(btn => btn.type);

export type BtnType = typeof btnTypes[number];

const positions = buttons.map(btn => btn.position);

export type Pos = typeof positions[number];

export default buttons;
