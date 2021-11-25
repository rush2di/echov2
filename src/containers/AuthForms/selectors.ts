import { AppStateType } from "containers/App/types";
import { createSelector } from "reselect";
import { AuthFormsReducerType } from "./type";

const selectAuthFormState = (globalState): AuthFormsReducerType =>
  globalState.authForms;

const selectAuthState = (globalState): AppStateType => globalState.app;

const makeSelectFormFields = () => {
  return createSelector(
    selectAuthFormState,
    (authForms: AuthFormsReducerType) => {
      return authForms.formFields;
    }
  );
};

const makeSelectFormSubmitState = () => {
  return createSelector(
    selectAuthState,
    (appState: AppStateType): boolean | null => {
      return appState.isSubmiting;
    }
  );
};

const makeSelectUserState = () => {
  return createSelector(selectAuthState, (appState: AppStateType) => {
    return appState.isOnline;
  });
};

const makeSelectAuthError = () => {
  return createSelector(selectAuthState, (appState: AppStateType) => {
    return appState.isAuthError;
  });
};

export {
  selectAuthState,
  makeSelectFormFields,
  makeSelectFormSubmitState,
  makeSelectUserState,
  makeSelectAuthError,
};
