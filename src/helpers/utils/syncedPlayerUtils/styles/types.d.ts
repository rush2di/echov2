import { IconName } from "@fortawesome/fontawesome-common-types";
import { PendingDownloadsUIDsType } from "containers/App/types";

export interface AnimateDownloadIconArgs {
  pendingList: PendingDownloadsUIDsType[];
  trackUID: string;
}

export interface AnimateDownloadIconReturn {
  icon: IconName;
  animated: boolean;
}
