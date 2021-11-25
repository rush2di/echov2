import _ from "lodash";
import {
  EMAIL_PATTERN,
  PASS_PATTERN,
  WRONG_FIELD_PATTERN,
  SHORT_FIELD_FEEDBACK,
  PASSWORD_FIELD_FEEDBACK,
  REQUIRED_FIELD_FEEDBACK,
  inputFieldStats,
  defaultFields,
} from "./constants";
import { ErrorStateType } from "./type";

type fieldsValidatorArgs =
  | typeof defaultFields.fullname
  | typeof defaultFields.email
  | typeof defaultFields.password;

const fieldsValidator = (fieldName: fieldsValidatorArgs, value: string) => {
  const trimmedValue = value.trim();
  switch (fieldName) {
    case defaultFields.fullname:
      if (trimmedValue.length < 3) {
        return {
          success: false,
          error: true,
          feedback: `${SHORT_FIELD_FEEDBACK}`,
        };
      }
      if (trimmedValue.length === 0) {
        return {
          success: false,
          error: true,
          feedback: `${fieldName} ${REQUIRED_FIELD_FEEDBACK}`,
        };
      }
      return { success: true, error: false, feedback: "" };
    case defaultFields.email:
      if (trimmedValue.length < 1) {
        return {
          success: false,
          error: true,
          feedback: `${fieldName} ${REQUIRED_FIELD_FEEDBACK}`,
        };
      }
      if (!EMAIL_PATTERN.test(trimmedValue)) {
        return {
          success: false,
          error: true,
          feedback: `${WRONG_FIELD_PATTERN} ${fieldName}`,
        };
      }
      if (!!EMAIL_PATTERN.test(trimmedValue)) {
        return {
          success: true,
          error: false,
          feedback: "",
        };
      }
      break;
    case defaultFields.password:
      if (PASS_PATTERN.test(trimmedValue)) {
        return {
          success: true,
          error: false,
          feedback: "",
        };
      }
      if (!PASS_PATTERN.test(trimmedValue)) {
        return {
          success: false,
          error: true,
          feedback: `${PASSWORD_FIELD_FEEDBACK}`,
        };
      }
      break;
    default:
      return { success: false, error: false, feedback: "" };
  }
};

const abstractStyling = (fieldState) => {
  if (fieldState.success === false && fieldState.error === false) {
    return inputFieldStats.default;
  }
  if (fieldState.success === true && fieldState.error === false) {
    return inputFieldStats.success;
  }
  if (fieldState.success === false && fieldState.error === true) {
    return inputFieldStats.error;
  }
};

const setFieldValidator = (fieldName: string, fieldValue: string) => {
  const validator = fieldsValidator(fieldName, fieldValue);
  const dataSchema = {};
  dataSchema[fieldName] = validator;

  return dataSchema;
};

const authFormSuccessCheck = (state: ErrorStateType) => {
  const omitFields = _.omit(state, "disableBtn");
  const result = _.every(omitFields, ["success", true]);
  return result;
};

export {
  fieldsValidator,
  setFieldValidator,
  abstractStyling,
  authFormSuccessCheck,
};
