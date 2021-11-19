import { authActionTypes } from "./constants";
import { AuthFormSingleFieldType } from "./type";

const onAuthInput = (payload: AuthFormSingleFieldType) => {
  return {
    type: authActionTypes.ON_AUTH_INPUT,
    payload,
  };
};

export { onAuthInput };
