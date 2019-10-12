import { Button, BtnType } from './buttons';

export const defaultColor = '#42464a';

const colorMap = {
  equals: '#466995',
  operation: '#798086',
  paren: '#595a5b',
  clear: '#a5243d',
  ext: '#595a5b',
} as const;

type Keys = keyof typeof colorMap;

export type Color = typeof colorMap[Keys] | typeof defaultColor;

const colors: { [key in BtnType]?: Color } = colorMap;

export function getColor(btn: Button): Color {
  return colors[btn.type] || defaultColor;
}
