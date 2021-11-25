import _, { some } from "lodash";
import { IconPrefix } from "@fortawesome/fontawesome-common-types";

import {
  AnimateDownloadIconArgs,
  AnimateDownloadIconReturn,
  isTrackLikedArgs,
} from "./types";
import store from "store/store";

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

const isTrackLiked = ({ trackUID }: isTrackLikedArgs) => {
  const { currentUser } = store.getState().app;
  return some(currentUser.likedTracks, ["id", trackUID]);
};

export { resolveReactionIcon, animateDownloadIcon, isTrackLiked };
