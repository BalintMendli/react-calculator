import { evaluate } from 'mathjs';
import { countOccurrences, fixFloat, hasMaxDigit, clearCount } from './utils';
import { Label } from '../constants/buttons';
import { labelToExp } from '../constants/maps';
import { AppState } from '../components/AppState';

interface HandleParams {
  label: Label;
  state: AppState;
}

export function evaluateExp({
  state: { displayValue },
}: HandleParams): Partial<AppState> | null {
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

export function handleNum({
  label: num,
  state: { displayValue, isResult },
}: HandleParams): Partial<AppState> | null {
  const maxDigit = hasMaxDigit(displayValue);
  const lastPi = displayValue.slice(-2) === 'pi';
  if (displayValue === '0' || isResult) {
    return {
      displayValue: num,
      isResult: false,
      error: '',
    };
  }
  if (!maxDigit && !lastPi) {
    return {
      displayValue: displayValue + num,
      error: '',
    };
  }
  return null;
}

export function handleOp({
  label: op,
  state: { displayValue = '' },
}: HandleParams): Partial<AppState> | null {
  const lastOp =
    ['/', '*', '+', '-'].indexOf(displayValue[displayValue.length - 1]) !== -1;
  const lastPoint = displayValue.slice(-1) === '.';
  const maxDigit = hasMaxDigit(displayValue);
  if (displayValue === '0') {
    return {
      displayValue: displayValue + op,
      isResult: false,
      error: '',
    };
  }
  if (!lastOp && !lastPoint && displayValue !== '0' && !maxDigit) {
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

export function handleDecimal({
  state: { displayValue, isResult },
}: HandleParams): Partial<AppState> | null {
  const displayArr = displayValue.split(/[+\-*/]/);
  const hasPoint = displayArr[displayArr.length - 1].includes('.');
  const lastPi = displayValue.slice(-2) === 'pi';
  const maxDigit = hasMaxDigit(displayValue);
  if (!hasPoint && !isResult && !maxDigit && !lastPi) {
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

export function handleParen({
  label: paren,
  state: { displayValue },
}: HandleParams): Partial<AppState> | null {
  const maxDigit = hasMaxDigit(displayValue);
  const hasLessOpening =
    paren === ')' &&
    countOccurrences(displayValue, /\(/g) >
      countOccurrences(displayValue, /\)/g);
  if (displayValue === '0' && hasLessOpening) {
    return {
      displayValue: paren,
      isResult: false,
      error: '',
    };
  }
  if (!maxDigit && (paren === '(' || hasLessOpening)) {
    return {
      displayValue: displayValue + paren,
      isResult: false,
      error: '',
    };
  }
  return null;
}

export function handleExt({
  label: ext,
  state: { displayValue = '' },
}: HandleParams): Partial<AppState> | null {
  let toExp = '';
  if (['sin', 'cos', 'tan', 'log'].includes(ext)) toExp = `${ext}(`;
  else toExp = labelToExp[ext] || '';
  const maxDigit = hasMaxDigit(displayValue);
  if (displayValue === '0' && toExp !== '^2' && toExp !== '!') {
    return {
      displayValue: toExp,
      isResult: false,
      error: '',
    };
  }
  if (!maxDigit) {
    return {
      displayValue: displayValue + toExp,
      isResult: false,
      error: '',
    };
  }
  return null;
}

export function handleClear({
  label,
  state: { displayValue, isResult },
}: HandleParams): Partial<AppState> | null {
  if (label === 'AC') return { displayValue: '0', expression: '', error: '' };
  if (label === 'C' && !isResult)
    return {
      displayValue:
        displayValue.length > 1
          ? displayValue.slice(0, -clearCount(displayValue))
          : '0',
      error: '',
    };
  return null;
}
