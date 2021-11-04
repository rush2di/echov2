import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { InputFieldProps, StateTypes } from "./types";

const inputFieldErrorIcon: IconProp = ["fas", "exclamation-circle"];

const inputFieldStats = {
  default: "default" as StateTypes,
  success: "success" as StateTypes,
  error: "error" as StateTypes,
};

const defaultFields = {
  fullname: "fullname",
  email: "email",
  password: "password",
};

const inputFieldName: InputFieldProps = {
  label: "Fullname",
  name: defaultFields.fullname,
  type: "text",
  placeholder: "Your name...",
};

const inputFieldEmail: InputFieldProps = {
  label: "Email",
  name: defaultFields.email,
  type: "email",
  icon: ["fas", "envelope"],
  placeholder: "Example@exampl.com...",
};

const inputFieldPassword: InputFieldProps = {
  label: "Password",
  name: defaultFields.password,
  type: "password",
  icon: ["fas", "eye"],
  placeholder: "Write your password...",
};

export {
  inputFieldStats,
  inputFieldErrorIcon,
  inputFieldEmail,
  inputFieldPassword,
  inputFieldName,
  defaultFields,
};
