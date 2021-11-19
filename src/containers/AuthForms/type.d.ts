import { AuthPageProps } from "pages/auth/types";

export interface AuthFormsContainerProps extends AuthPageProps {}

export interface AuthFormsReducerType {
  formFields: AuthFormFieldsType<string | null>;
}

export interface userDataType<T, L> {
  fullname: T;
  avatar: T;
  likedTracks: L;
  downloadedTracks: L;
}

export interface AuthFormFieldsType<T> {
  fullname?: T;
  email: T;
  password: T;
}

type AuhtPropertyType = "fullname" | "email" | "password";

export interface AuthFormSingleFieldType {
  [x: AuhtPropertyType]: string;
}

export interface ErrorStateType
  extends AuthFormFieldsType<ErrorStateFieldType> {
  disableBtn: boolean;
}

export interface ErrorStateFieldType {
  success: boolean;
  error: boolean;
  feedback: string;
}
