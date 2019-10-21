import { Label } from './buttons';

export const keyMap: { [key: string]: Label } = {
  Enter: '=',
  Delete: 'AC',
  Backspace: 'C',
  Decimal: '.',
  ',': '.',
};

export const expToDisplay = new Map([
  [/\*/g, ' × '],
  [/\+/g, ' + '],
  [/-/g, ' - '],
  [/\//g, ' / '],
  [/\^2/g, '²'],
  [/sqrt/g, ' √'],
  [/pi/g, 'π'],
]);

export const adjustCharMap = new Map([[/\^2/g, 1], [/pi/g, 1], [/sqrt/g, 3]]);

export const labelToExp: { [key in Label]?: string } = {
  π: 'pi',
  'x²': '^2',
  'x!': '!',
  '√': 'sqrt(',
};

export const clearMap = new Map([
  [/\^2/, 2],
  [/pi/, 2],
  [/sqrt\(/, 5],
  [/sin\(/, 4],
  [/cos\(/, 4],
  [/tan\(/, 4],
  [/log\(/, 4],
]);
