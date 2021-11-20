import _ from "lodash";
import { IconPrefix } from "@fortawesome/fontawesome-common-types";

import { AnimateDownloadIconArgs, AnimateDownloadIconReturn } from "./types";

const resolveReactionIcon = (
  isHeart: boolean | undefined,
  isLiked: boolean | undefined
): IconPrefix => {
  const FA_SOLID = "fas";
  const FA_REGULAR = "far";

  const heartReaction = isLiked === true ? FA_SOLID : FA_REGULAR;

  return isHeart === true ? heartReaction : FA_SOLID;
};

const animateDownloadIcon = ({
  pendingList,
  trackUID,
}: AnimateDownloadIconArgs): AnimateDownloadIconReturn => {
  const isPending = _.some(pendingList, ["uid", trackUID]);

  return isPending
    ? { icon: "circle-notch", animated: true }
    : { icon: "download", animated: false };
};

export { resolveReactionIcon, animateDownloadIcon };
