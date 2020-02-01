import buttons, { Button, Label, BtnType } from '../constants/buttons';
import { AppState } from '../components/AppState';
import * as operate from './operate';

function selectButton(label: Label): Button | never {
  const button = buttons.find(btn => btn.label === label);
  if (!button) throw new Error('Invalid button label');
  return button;
}

const handleMap: { [key in BtnType]: keyof typeof operate } = {
  clear: 'handleClear',
  number: 'handleNum',
  operation: 'handleOp',
  decimal: 'handleDecimal',
  equals: 'evaluateExp',
  ext: 'handleExt',
  paren: 'handleParen',
};

export default function handleInput(
  label: Label,
  state: AppState,
): Partial<AppState> | null {
  const button = selectButton(label);
  const func = handleMap[button.type];
  return operate[func]({ label, state });
}
