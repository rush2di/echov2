import { AudioPlayerState } from "./types";

const selectPlayerState = (globalState): AudioPlayerState => globalState.player;

export { selectPlayerState };
