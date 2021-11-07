import { userDataType } from "containers/AuthForms/type";

const selectAuthUserState = (globalState): boolean =>
  globalState.authForms.isOnline;

const selectAuthcurrentUser = (
  globalState
): userDataType<string | null, string[] | null> =>
  globalState.authForms.currentUser;

export { selectAuthUserState, selectAuthcurrentUser };
