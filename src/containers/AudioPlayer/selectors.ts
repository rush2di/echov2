import { AppStateType } from "containers/App/types";
import { AudioPlayerState } from "./types";

const selectPlayerState = (globalState): AudioPlayerState => globalState.player;

export { selectPlayerState };
