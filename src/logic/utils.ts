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
  if (key === 'Delete') {
    label = 'AC';
  }
  if (key === 'Backspace') {
    label = 'C';
  }
  if (isLabel(key)) {
    label = key;
  }
  return label;
}

const replaceMap = new Map([
  [/\*/g, ' × '],
  [/\+/g, ' + '],
  [/-/g, ' - '],
  [/\//g, ' / '],
  [/\^2/g, '²'],
  [/sqrt/g, ' √'],
  [/pi/g, 'π'],
]);

export function transformForDisplay(display: string): string {
  let transformedDisplay = display;
  replaceMap.forEach((str, regex) => {
    transformedDisplay = transformedDisplay.replace(regex, str);
  });
  return transformedDisplay;
}

export function fixFloat(n: number): number {
  const precision = 1000000000000;
  return Math.round(precision * n) / precision;
}

const adjustCharMap: { [key: string]: number } = {
  '^2': 1,
  pi: 1,
  sqrt: 3,
};

function adjustChars(exp: string): number {
  let adjust = 0;
  Object.entries(adjustCharMap).forEach(([ch, n]) => {
    adjust += (exp.match(ch) || []).length * n;
  });
  return adjust;
}

export function transformError(err: string, display: string): string {
  const re = /(\d*)\)$/;
  const found = err.match(re);
  if (found) {
    const number = parseInt(found[1], 10);
    const adjust = adjustChars(display.slice(0, number));
    const replaced = err.replace(/\d*\)$/, `${(number - adjust).toString()})`);
    return replaced;
  }
  return err;
}
