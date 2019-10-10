const buttons = [
  { label: 'AC', id: 'clear', type: 'clear', position: { x: 6, y: 1 } },
  { label: 'C', id: 'clear', type: 'clear', position: { x: 5, y: 1 } },
  { label: '/', id: 'divide', type: 'operation', position: { x: 3, y: 1 } },
  { label: '*', id: 'multiply', type: 'operation', position: { x: 4, y: 1 } },
  { label: '7', id: 'seven', type: 'number', position: { x: 3, y: 2 } },
  { label: '8', id: 'eight', type: 'number', position: { x: 4, y: 2 } },
  { label: '9', id: 'nine', type: 'number', position: { x: 5, y: 2 } },
  { label: '-', id: 'subtract', type: 'operation', position: { x: 6, y: 2 } },
  { label: '4', id: 'four', type: 'number', position: { x: 3, y: 3 } },
  { label: '5', id: 'five', type: 'number', position: { x: 4, y: 3 } },
  { label: '6', id: 'six', type: 'number', position: { x: 5, y: 3 } },
  { label: '+', id: 'add', type: 'operation', position: { x: 6, y: 3 } },
  { label: '1', id: 'one', type: 'number', position: { x: 3, y: 4 } },
  { label: '2', id: 'two', type: 'number', position: { x: 4, y: 4 } },
  { label: '3', id: 'three', type: 'number', position: { x: 5, y: 4 } },
  { label: '=', id: 'equals', type: 'equals', position: { x: 6, y: [4, 6] } },
  { label: '0', id: 'zero', type: 'number', position: { x: [3, 5], y: 5 } },
  { label: '.', id: 'decimal', type: 'decimal', position: { x: 5, y: 5 } },
  { label: '(', id: 'open-paren', type: 'paren', position: { x: 1, y: 1 } },
  { label: ')', id: 'close-paren', type: 'paren', position: { x: 2, y: 1 } },
  { label: 'sin', id: 'sin', type: 'ext', position: { x: 1, y: 2 } },
  { label: 'cos', id: 'cos', type: 'ext', position: { x: 1, y: 3 } },
  { label: 'tan', id: 'tan', type: 'ext', position: { x: 1, y: 4 } },
  { label: 'π', id: 'tan', type: 'ext', position: { x: 1, y: 5 } },
  { label: '√', id: 'tan', type: 'ext', position: { x: 2, y: 2 } },
  { label: 'x²', id: 'tan', type: 'ext', position: { x: 2, y: 3 } },
  { label: 'log', id: 'tan', type: 'ext', position: { x: 2, y: 4 } },
  { label: 'x!', id: 'tan', type: 'ext', position: { x: 2, y: 5 } },
] as const;

export type Button = typeof buttons[number];

export type Label = typeof buttons[number]['label'];

export type Id = typeof buttons[number]['id'];

export type BtnType = typeof buttons[number]['type'];

export type Pos = typeof buttons[number]['position'];

export default buttons;
