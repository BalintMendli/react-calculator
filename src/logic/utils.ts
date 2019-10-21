import buttons, { Label, Pos } from '../constants/buttons';
import {
  keyMap,
  expToDisplay,
  adjustCharMap,
  clearMap,
} from '../constants/maps';
import { maxDigit } from '../constants/dimensions';

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

export function transformForDisplay(display: string): string {
  let transformedDisplay = display;
  expToDisplay.forEach((str, regex) => {
    transformedDisplay = transformedDisplay.replace(regex, str);
  });
  return transformedDisplay;
}

export function fixFloat(n: number): number {
  const precision = 10 ** 11;
  return Math.round(precision * n) / precision;
}

function adjustChars(exp: string): number {
  let adjust = 0;
  adjustCharMap.forEach((n, ch) => {
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

export function hasMaxDigit(exp: string): boolean {
  return transformForDisplay(exp).length >= maxDigit;
}

export function clearCount(exp: string): number {
  const found = Array.from(clearMap.keys()).find(k => {
    const re = new RegExp(k.source + /$/.source);
    return re.test(exp);
  });
  const n = found && clearMap.get(found);
  if (n) return n;
  return 1;
}

export function getGridPos(pos: Pos): [string, string] {
  const xPos = Array.isArray(pos.x)
    ? `${pos.x[0]} / ${pos.x[1]}`
    : pos.x.toString();
  const yPos = Array.isArray(pos.y)
    ? `${pos.y[0]} / ${pos.y[1]}`
    : pos.y.toString();
  return [xPos, yPos];
}

export function getDimStyle(dim: number): string {
  return new Array(dim).fill('1fr').join(' ');
}
