import { userDataType } from "containers/AuthForms/type";

const selectAuthUserState = (globalState): boolean =>
  globalState.app.isOnline;

const selectAuthcurrentUser = (
  globalState
): userDataType<string | null, string[] | null> =>
  globalState.app.currentUser;

export { selectAuthUserState, selectAuthcurrentUser };
