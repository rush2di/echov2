import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import _ from "lodash";

import { LOGIN_AUTH_TYPE, REGISTER_AUTH_TYPE } from "pages/auth/constants";
import InputField from "components/InputField";
import Button from "components/Button";

import {
  AUTHFORM_NOTICE_TEXT,
  FACEBOOK_BTN_TEXT,
  GOOGLE_BTN_TEXT,
  inputFieldEmail,
  inputFieldName,
  inputFieldPassword,
  passwordFieldHideState,
  passwordFieldShowState,
  defaultBtnText,
  defaultFields,
} from "./constants";
import {
  abstractStyling,
  authFormSuccessCheck,
  setFieldValidator,
} from "./utils";
import {
  ErrorStateType,
  AuthFormFieldsType,
  AuthFormsContainerProps,
} from "./type";
import {
  makeSelectUserState,
  makeSelectFormFields,
  makeSelectFormSubmitState,
  makeSelectAuthError,
} from "./selectors";
import { authRegisterStart, authLoginStart, onAuthInput } from "./actions";
import "./styles.scss";

const liveAuthState = createStructuredSelector({
  formFields: makeSelectFormFields(),
  isSubmiting: makeSelectFormSubmitState(),
  isUserOnline: makeSelectUserState(),
  isAuthError: makeSelectAuthError(),
});

const AuthFormsContainer = ({ type }: AuthFormsContainerProps) => {
  let timeout: any = null;
  const isRegister = type === REGISTER_AUTH_TYPE;

  const { formFields, isSubmiting, isUserOnline, isAuthError } =
    useSelector(liveAuthState);

  const history = useHistory();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorFields, setErrorFields] = useState<ErrorStateType>({
    fullname: { success: false, error: false, feedback: "" },
    email: { success: false, error: false, feedback: "" },
    password: { success: false, error: false, feedback: "" },
    disableBtn: false,
  });

  const togglePasswordStyle = showPassword
    ? passwordFieldShowState
    : passwordFieldHideState;

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const successCheck = authFormSuccessCheck(errorFields);
    const newFormFields = formFields as AuthFormFieldsType<string>;
    if (successCheck) {
      type === "login"
        ? dispatch(authLoginStart(newFormFields))
        : dispatch(authRegisterStart(newFormFields));
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = _.debounce((e: ChangeEvent<HTMLInputElement>) => {
    const fieldValue = e.target.value.trim();
    const fieldName = e.target.name;

    const dataSchema = {};
    dataSchema[fieldName] = fieldValue;
    const validatedField = setFieldValidator(fieldName, fieldValue);

    setErrorFields({ ...errorFields, ...validatedField });
    dispatch(onAuthInput(dataSchema));
  }, 800);

  useEffect(() => {
    const successCheck = authFormSuccessCheck(errorFields);
    if (successCheck && errorFields.disableBtn === true) {
      setErrorFields({ ...errorFields, disableBtn: false });
    }
    if (!successCheck && errorFields.disableBtn === false) {
      setErrorFields({ ...errorFields, disableBtn: true });
    }
  }, [errorFields]);

  useEffect(() => {
    if (type === LOGIN_AUTH_TYPE) {
      setErrorFields({
        ...errorFields,
        fullname: { success: true, error: false, feedback: "" },
      });
    }
  }, []);

  useEffect(() => {
    if (isUserOnline) {
      toast.success("Successfully logged in");
      timeout = setTimeout(() => {
        history.push("/");
      }, 5000);
    }
    if (isSubmiting) toast.info("Submited");
    if (isAuthError) toast.error("Something bad happened");

    return () => {
      clearTimeout(timeout);
    };
  }, [isSubmiting, isUserOnline, isAuthError]);

  return (
    <form className="authForm" autoComplete="off" onSubmit={handleSubmit}>
      <div className="authForm__body">
        {isRegister && (
          <InputField
            {...inputFieldName}
            state={abstractStyling(errorFields[defaultFields.fullname])}
            feedback={errorFields[defaultFields.fullname].feedback}
            onChange={handleChange}
          />
        )}
        <InputField
          {...inputFieldEmail}
          state={abstractStyling(errorFields[defaultFields.email])}
          feedback={errorFields[defaultFields.email].feedback}
          onChange={handleChange}
        />
        <InputField
          {...inputFieldPassword}
          {...togglePasswordStyle}
          state={abstractStyling(errorFields[defaultFields.password])}
          feedback={errorFields[defaultFields.password].feedback}
          onChange={handleChange}
          onClick={togglePassword}
        />
        <Button
          type="submit"
          classNames={"mt-1 btn--fluid"}
          disabled={errorFields.disableBtn}
        >
          {!!isSubmiting ? (
            <FontAwesomeIcon icon={["fas", "circle-notch"]} spin />
          ) : (
            defaultBtnText[type]
          )}
        </Button>
      </div>
      <div className="authForm__notice txt-md my-3">
        <p className="txt-md mx-1">{AUTHFORM_NOTICE_TEXT}</p>
      </div>
      <Button
        icon={["fab", "google"]}
        label={FACEBOOK_BTN_TEXT}
        classNames={"btn--flex btn--google btn--fluid"}
      />
      <Button
        icon={["fab", "facebook"]}
        label={GOOGLE_BTN_TEXT}
        classNames={"btn--flex btn--facebook btn--fluid mt-1"}
      />
      {/* <Button
        label={defaultBtnText[type]}
        type="submit"
        classNames={"mt-1 btn--fluid"}
      >
        <FontAwesomeIcon icon={["fas", "circle-notch"]} spin size="lg" />
      </Button> */}
    </form>
  );
};

export default AuthFormsContainer;
