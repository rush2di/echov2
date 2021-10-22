import { appActions } from "./constants";

const userSelectPlaylist = (payload) => {
  return {
    type: appActions.USER_SELECT_PLAYLIST,
    payload,
  };
};

export { userSelectPlaylist };
