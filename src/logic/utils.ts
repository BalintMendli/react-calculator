import { evaluate } from 'mathjs';
import buttons, { Button, Label, labels } from '../constants/buttons';

export interface AppState {
  displayValue: string;
  isResult: boolean;
}

export function selectButton(label: Label): Button | never {
  const button = buttons.find(btn => btn.label === label);
  if (!button) throw new Error('Invalid button label');
  return button;
}

function evaluateExp(displayValue: string): AppState | null {
  const lastOp =
    ['/', '*', '+', '-'].indexOf(displayValue[displayValue.length - 1]) !== -1;
  const lastPoint = displayValue.slice(-1) === '.';
  if (!lastOp && !lastPoint) {
    return {
      displayValue: (
        Math.round(1000000000000 * evaluate(displayValue)) / 1000000000000
      ).toString(),
      isResult: true,
    };
  }
  return null;
}

function handleNum(
  num: string,
  displayValue: string,
  isResult: boolean
): Partial<AppState> | null {
  const hasMaxDigit = displayValue.length >= 18;
  if (displayValue === '0' || isResult) {
    return {
      displayValue: num,
      isResult: false,
    };
  }
  if (!hasMaxDigit) {
    return {
      displayValue: displayValue + num,
    };
  }
  return null;
}

function handleOp(
  op: string,
  displayValue: string,
  isResult: boolean
): AppState | null {
  const lastOp =
    ['/', '*', '+', '-'].indexOf(displayValue[displayValue.length - 1]) !== -1;
  const lastPoint = displayValue.slice(-1) === '.';
  const isMaxDigit = displayValue.length >= 18;
  if (displayValue === '0' && (op === '+' || op === '-')) {
    return {
      displayValue: op,
      isResult: false,
    };
  }
  if (!lastOp && !lastPoint && displayValue !== '0' && !isMaxDigit) {
    return {
      displayValue: displayValue + op,
      isResult: false,
    };
  }
  if (lastOp) {
    return {
      displayValue: displayValue.slice(0, -1) + op,
      isResult: false,
    };
  }
  return null;
}

function handleDecimal(
  displayValue: string,
  isResult: boolean
): Partial<AppState> | null {
  const displayArr = displayValue.split(/[+\-*/]/);
  const pointCond = displayArr[displayArr.length - 1].indexOf('.') !== -1;
  const isMaxDigit = displayValue.length >= 18;
  if (!pointCond && !isResult && !isMaxDigit) {
    return {
      displayValue: `${displayValue}.`,
    };
  }
  if (isResult) {
    return {
      displayValue: '0.',
      isResult: false,
    };
  }
  return null;
}

function handleClear(): Partial<AppState> {
  return { displayValue: '0' };
}

export function handleInput(
  label: Label,
  state: AppState
): Partial<AppState> | null {
  const { displayValue, isResult } = state;
  const button = selectButton(label);
  if (button.type === 'clear') return handleClear();
  if (button.type === 'number') return handleNum(label, displayValue, isResult);
  if (button.type === 'operation')
    return handleOp(label, displayValue, isResult);
  if (button.type === 'decimal') return handleDecimal(displayValue, isResult);
  if (button.type === 'equals') return evaluateExp(displayValue);
  return null;
}

function isLabel(key: string): key is Label {
  return labels.some(l => l === key);
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
  console.log(key, label);
  return label;
}
