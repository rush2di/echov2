import { IconPrefix } from "@fortawesome/fontawesome-common-types";

const resolveReactionIcon = (
  isHeart: boolean | undefined,
  isLiked: boolean | undefined
): IconPrefix => {
  const heartReaction = !!isLiked ? "fas" : "far";
  return !!isHeart ? heartReaction : "fas";
};

export { resolveReactionIcon };
