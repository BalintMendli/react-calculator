import { evaluate } from 'mathjs';
import { countOccurrences, fixFloat } from './utils';
import buttons, { Button, Label } from '../constants/buttons';
import { maxDigit } from '../constants/dimensions';
import { AppState } from '../components/AppState';

function selectButton(label: Label): Button | never {
  const button = buttons.find(btn => btn.label === label);
  if (!button) throw new Error('Invalid button label');
  return button;
}

function evaluateExp(displayValue: string): Partial<AppState> | null {
  const lastOp =
    ['/', '*', '+', '-'].indexOf(displayValue[displayValue.length - 1]) !== -1;
  const lastPoint = displayValue.slice(-1) === '.';
  if (!lastOp && !lastPoint) {
    try {
      return {
        expression: displayValue,
        displayValue: fixFloat(evaluate(displayValue)).toString(),
        isResult: true,
        error: '',
      };
    } catch (e) {
      return { error: e.message };
    }
  }
  return null;
}

function handleNum(
  num: string,
  displayValue: string,
  isResult: boolean
): Partial<AppState> | null {
  const hasMaxDigit = displayValue.length >= maxDigit;
  const lastPi = displayValue.slice(-2) === 'pi';
  if (displayValue === '0' || isResult) {
    return {
      displayValue: num,
      isResult: false,
      error: '',
    };
  }
  if (!hasMaxDigit && !lastPi) {
    return {
      displayValue: displayValue + num,
      error: '',
    };
  }
  return null;
}

function handleParen(
  paren: string,
  displayValue: string,
  isResult: boolean
): Partial<AppState> | null {
  const hasMaxDigit = displayValue.length >= maxDigit;
  const hasLessOpening =
    paren === '(' ||
    countOccurrences(displayValue, /\(/g) >
      countOccurrences(displayValue, /\)/g);
  if ((displayValue === '0' || isResult) && hasLessOpening) {
    return {
      displayValue: paren,
      isResult: false,
      error: '',
    };
  }
  if (!hasMaxDigit && hasLessOpening) {
    return {
      displayValue: displayValue + paren,
      error: '',
    };
  }
  return null;
}

function handleExt(
  ext: string,
  displayValue: string,
  isResult: boolean
): Partial<AppState> | null {
  let toDisplay = '';
  if (ext === 'sin' || ext === 'cos' || ext === 'tan' || ext === 'log')
    toDisplay = `${ext}(`;
  if (ext === 'π') toDisplay = 'pi';
  if (ext === 'x²') toDisplay = '^2';
  if (ext === 'x!') toDisplay = '!';
  if (ext === '√') toDisplay = 'sqrt(';
  const hasMaxDigit = displayValue.length >= maxDigit;
  if (displayValue === '0' && toDisplay !== '^2' && toDisplay !== '!') {
    return {
      displayValue: toDisplay,
      isResult: false,
      error: '',
    };
  }
  if (!hasMaxDigit) {
    return {
      displayValue: displayValue + toDisplay,
      error: '',
    };
  }
  return null;
}

function handleOp(
  op: string,
  displayValue: string,
  isResult: boolean
): Partial<AppState> | null {
  const lastOp =
    ['/', '*', '+', '-'].indexOf(displayValue[displayValue.length - 1]) !== -1;
  const lastPoint = displayValue.slice(-1) === '.';
  const isMaxDigit = displayValue.length >= maxDigit;
  if (displayValue === '0') {
    return {
      displayValue: displayValue + op,
      isResult: false,
      error: '',
    };
  }
  if (!lastOp && !lastPoint && displayValue !== '0' && !isMaxDigit) {
    return {
      displayValue: displayValue + op,
      isResult: false,
      error: '',
    };
  }
  if (lastOp) {
    return {
      displayValue: displayValue.slice(0, -1) + op,
      isResult: false,
      error: '',
    };
  }
  return null;
}

function handleDecimal(
  displayValue: string,
  isResult: boolean
): Partial<AppState> | null {
  const displayArr = displayValue.split(/[+\-*/]/);
  const hasPoint = displayArr[displayArr.length - 1].includes('.');
  const lastPi = displayValue.slice(-2) === 'pi';
  const isMaxDigit = displayValue.length >= maxDigit;
  if (!hasPoint && !isResult && !isMaxDigit && !lastPi) {
    return {
      displayValue: `${displayValue}.`,
      error: '',
    };
  }
  if (isResult) {
    return {
      displayValue: '0.',
      isResult: false,
      error: '',
    };
  }
  return null;
}

function handleClear(
  label: Label,
  displayValue: string,
  isResult: boolean
): Partial<AppState> | null {
  if (label === 'AC') return { displayValue: '0', expression: '', error: '' };
  if (label === 'C' && !isResult)
    return {
      displayValue: displayValue.length > 1 ? displayValue.slice(0, -1) : '0',
      error: '',
    };
  return null;
}

export default function handleInput(
  label: Label,
  state: AppState
): Partial<AppState> | null {
  const { displayValue, isResult } = state;
  const button = selectButton(label);
  if (button.type === 'clear')
    return handleClear(label, displayValue, isResult);
  if (button.type === 'number') return handleNum(label, displayValue, isResult);
  if (button.type === 'operation')
    return handleOp(label, displayValue, isResult);
  if (button.type === 'decimal') return handleDecimal(displayValue, isResult);
  if (button.type === 'equals') return evaluateExp(displayValue);
  if (button.type === 'ext') return handleExt(label, displayValue, isResult);
  if (button.type === 'paren')
    return handleParen(label, displayValue, isResult);
  return null;
}
