import { Button, BtnType } from './buttons';

export const defaultColor = '#42464a';

export const colors: { [key in BtnType]?: string } = {
  equals: '#466995',
  operation: '#798086',
  clear: '#a5243d',
};

export function getColor(btn: Button): string {
  return colors[btn.type] || defaultColor;
}
