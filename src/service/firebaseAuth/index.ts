import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { AuthFormFieldsType } from "containers/AuthForms/type";
import { auth } from "../../firebase";

const signUp = async ({
  fullname,
  email,
  password,
}: AuthFormFieldsType<string>) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

const login = async ({
  fullname,
  email,
  password,
}: AuthFormFieldsType<string>) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

const logout = () => {
  auth.signOut();
};

export { signUp, login, logout };
