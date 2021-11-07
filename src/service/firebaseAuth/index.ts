import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { AuthFormFieldsType } from "containers/AuthForms/type";
import { auth } from "../../firebase";

const register = async ({
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

const logout = async () => {
  return await auth.signOut();
};

export { register, login, logout };
