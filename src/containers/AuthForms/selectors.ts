import { createSelector } from "reselect";
import { AuthFormsReducerType } from "./type";

const selectAuthState = (globalState): AuthFormsReducerType =>
  globalState.authForms;

const makeSelectFormFields = () => {
  return createSelector(selectAuthState, (authForms: AuthFormsReducerType) => {
    return authForms.formFields;
  });
};

const makeSelectFormSubmitState = () => {
  return createSelector(
    selectAuthState,
    (authForms: AuthFormsReducerType): boolean | null => {
      return authForms.isSubmiting;
    }
  );
};

export { selectAuthState, makeSelectFormFields, makeSelectFormSubmitState };
