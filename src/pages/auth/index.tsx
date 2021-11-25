import ProgressiveImage from "react-progressive-graceful-image";

import AuthFormsContainer from "containers/AuthForms";

import {
  authImage,
  FALLBACK_MSG,
  LOGIN_AUTH_TYPE,
  REGISTER_AUTH_TYPE,
} from "./constants";
import { AuthPageProps } from "./types";
import "./styles.scss";

const AuthPage = ({ type }: AuthPageProps) => {
  if (type === REGISTER_AUTH_TYPE) {
    return (
      <AuthPageWrapper>
        <AuthFormsContainer type={REGISTER_AUTH_TYPE} />
      </AuthPageWrapper>
    );
  }
  if (type === LOGIN_AUTH_TYPE) {
    return (
      <AuthPageWrapper>
        <AuthFormsContainer type={LOGIN_AUTH_TYPE} />
      </AuthPageWrapper>
    );
  }
  return (
    <AuthPageWrapper>
      <p className="txt-btn txt-muted">{FALLBACK_MSG}</p>
    </AuthPageWrapper>
  );
};

const AuthPageWrapper = ({ children }) => (
  <div className="authPage__wrapper">
    {children}
    <ProgressiveImage
      src={authImage.md}
      placeholder={authImage.xsm}
      srcSetData={{
        srcSet: authImage.srcSet,
        sizes: authImage.sizes,
      }}
    >
      {(src, _, srcSetData) => {
        return (
          <img
            src={src}
            srcSet={srcSetData.srcSet}
            sizes={srcSetData.sizes}
            alt={authImage.alt}
          />
        );
      }}
    </ProgressiveImage>
  </div>
);

export default AuthPage;
