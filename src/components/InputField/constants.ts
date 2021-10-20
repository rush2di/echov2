import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { InputFieldProps, StateTypes } from "./types";

const inputFieldErrorIcon: IconProp = ["fas", "exclamation-circle"];

const inputFieldStats = {
  default: "default" as StateTypes,
  success: "success" as StateTypes,
  error: "error" as StateTypes,
};

const inputFieldSearchBar: InputFieldProps = {
  name: "search",
  type: "text",
  icon: ["fas", "search"],
  placeholder: "Search...",
};

const inputFieldEmail: InputFieldProps = {
  label: "Email",
  name: "email",
  type: "email",
  icon: ["fas", "envelope"],
  placeholder: "Example@exampl.com...",
};

const inputFieldPassword: InputFieldProps = {
  label: "Password",
  name: "password",
  type: "password",
  icon: ["fas", "eye"],
  placeholder: "Write your password...",
};

export {
  inputFieldStats,
  inputFieldErrorIcon,
  inputFieldSearchBar,
  inputFieldEmail,
  inputFieldPassword,
};
