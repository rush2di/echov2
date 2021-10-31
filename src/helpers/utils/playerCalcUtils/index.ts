const toPercentage = (fistValue: number, secondValue: number): number => {
  const percentage = (fistValue / secondValue) * 100;
  return parseInt(percentage.toFixed(4));
};

const toRangePercentage = (event: MouseEvent, element: HTMLElement) => {
  const elementRect = element.getBoundingClientRect();
  const relativeClickPosition = event.pageX - elementRect.left;

  return toPercentage(relativeClickPosition, elementRect.width);
};

export { toPercentage, toRangePercentage };
