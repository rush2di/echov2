import { AppContentType } from "./types";

const selectAppContent = (globalState): AppContentType[] =>
  globalState.app.data;

export { selectAppContent };
