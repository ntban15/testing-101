export function countBananas(str: string): number {
  const bananaRegex = /🍌/g
  const found = str.match(bananaRegex);

  return found?.length ?? 0;
}
