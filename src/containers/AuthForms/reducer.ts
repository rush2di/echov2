import { authActionTypes } from "./constants";
import { AuthFormsReducerType } from "./type";

const initState: AuthFormsReducerType = {
  formFields: {
    fullname: null,
    email: null,
    password: null,
  },
  isSubmiting: null,
  isOnline: null,
  hasError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case authActionTypes.ON_AUTH_INPUT:
      return {
        ...state,
        formFields: { ...state.formFields, ...action.payload },
      };
    case authActionTypes.REQUEST_AUTH_REGISTER_START:
      return { ...state, isSubmiting: true };
    case authActionTypes.REQUEST_AUTH_LOGIN_START:
      return { ...state, isSubmiting: true };
    default:
      return state;
  }
};

export default authReducer;
