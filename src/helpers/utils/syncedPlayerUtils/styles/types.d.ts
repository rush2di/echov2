import { IconName } from "@fortawesome/fontawesome-common-types";
import { PendingDownloadsUIDsType, TrackDataType, UserDataType } from "containers/App/types";

export interface AnimateDownloadIconArgs {
  pendingList: PendingDownloadsUIDsType[];
  trackUID: string;
}

export interface AnimateDownloadIconReturn {
  icon: IconName;
  animated: boolean;
}

export interface isTrackLikedArgs {
  trackUID: string;
}
