import AuthFormsContainer from "containers/AuthForms";
import PageError from "containers/PageError";
import { LOGIN_AUTH_TYPE, REGISTER_AUTH_TYPE, FALLBACK_MSG } from "./constants";
import { AuthPageProps } from "./types";

const AuthPage = ({ type }: AuthPageProps) => {
  if (type === REGISTER_AUTH_TYPE) {
    return <AuthFormsContainer type={REGISTER_AUTH_TYPE} />;
  }
  if (type === LOGIN_AUTH_TYPE) {
    return <AuthFormsContainer type={LOGIN_AUTH_TYPE} />;
  }
  return (
    <PageError isLoading={false} isError={true}>
      <p className="txt-btn txt-muted">{FALLBACK_MSG}</p>
    </PageError>
  );
};

export default AuthPage;
