import { authActionTypes } from "./constants";
import { AuthFormsReducerType } from "./type";

const initState: AuthFormsReducerType = {
  formFields: {
    fullname: null,
    email: null,
    password: null,
  },
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case authActionTypes.ON_AUTH_INPUT:
      return {
        ...state,
        formFields: { ...state.formFields, ...action.payload },
      };
    default:
      return state;
  }
};

export default authReducer;
