import buttons, { Label } from '../constants/buttons';

const keyMap: { [key: string]: Label } = {
  Enter: '=',
  Delete: 'AC',
  Backspace: 'C',
  Decimal: '.',
  ',': '.',
};

function isLabel(key: string): key is Label {
  return buttons.some(l => l.label === key);
}

export function getLabelFromKey(key: string): Label | '' {
  let label: Label | '' = '';
  label = keyMap[key];
  if (isLabel(key)) {
    label = key;
  }
  return label;
}

export function countOccurrences(str: string, substr: RegExp): number {
  return (str.match(substr) || []).length;
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
  const precision = 10 ** 11;
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
    adjust += countOccurrences(exp, new RegExp(ch, 'g')) * n;
  });
  return adjust;
}

export function transformError(err: string, display: string): string {
  if (err.length > 80) return err.split(' (')[0];
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
