import content from "assets/content/data.json";
import { AppContentType } from "./types";

const appData = content.data as AppContentType[];

const appActions = {
  USER_SELECT_PLAYLIST: "USER_SELECT_PLAYLIST",
};

export { appActions, appData };
