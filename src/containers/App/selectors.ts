import { AppStateType } from "./types";

const selectAppContent = (globalState): AppStateType => globalState.app;

export { selectAppContent };
