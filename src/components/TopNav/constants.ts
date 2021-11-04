import { InputFieldProps } from "components/InputField/types";
import { TopNavItemProps } from "./types";

const inputFieldSearchBar: InputFieldProps = {
  name: "search",
  type: "text",
  icon: ["fas", "search"],
  placeholder: "Search...",
};

const authRegisterDefaults: TopNavItemProps = {
  label: "Register",
  link: "/register",
  icon: "user-plus",
};

const authLoginDefaults: TopNavItemProps = {
  label: "Login",
  link: "/login",
  icon: "sign-in-alt",
};

export { inputFieldSearchBar, authRegisterDefaults, authLoginDefaults };
