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

const parseFeaturedArtists = (artists: string[], separetor: string = ", ") => {
  return artists.length > 3
    ? artists.slice(0, 3).join(separetor)
    : artists.join(separetor);
};

const rankLeftFill = (rank: number) => {
  return rank.toString().padStart(3, "0");
};

const artistsNumberToText = (
  pattern: string,
  modifier: string,
  artistsNumber: number | string
) => {
  const modified = artistsNumber.toString();
  return pattern.replace(modifier, modified);
};

export {
  toPercentage,
  toRangePercentage,
  resolveReactionIcon,
  parseFeaturedArtists,
  rankLeftFill,
  artistsNumberToText,
};
