import { pageTypes } from "./constants";
import { TrackDataType, UserDataType } from "containers/App/types";

export interface UserInfoProps {
  currentUser: UserDataType<string, TrackDataType[]>;
  pageType: typeof pageTypes.DOWNLOADS | typeof pageTypes.LIKES;
}
