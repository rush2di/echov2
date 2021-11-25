export const toPercentage = (
  fistValue: number,
  secondValue: number
): number => {
  const percentage = (fistValue / secondValue) * 100;
  return parseInt(percentage.toFixed(4));
};
