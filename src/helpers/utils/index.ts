import { IconPrefix } from "@fortawesome/fontawesome-common-types";

const toPercentage = (fistValue: number, secondValue: number): number => {
  const percentage = (fistValue / secondValue) * 100;
  return parseInt(percentage.toFixed(4));
};

const toRangePercentage = (event: MouseEvent, element: HTMLElement) => {
  const elementRect = element.getBoundingClientRect();
  const relativeClickPosition = event.pageX - elementRect.left;

  return toPercentage(relativeClickPosition, elementRect.width);
};

const resolveReactionIcon = (
  isHeart: boolean | undefined,
  isLiked: boolean | undefined
): IconPrefix => {
  const heartReaction = !!isLiked ? "fas" : "far";
  return !!isHeart ? heartReaction : "fas";
};

export { toPercentage, toRangePercentage, resolveReactionIcon };
