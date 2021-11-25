import { LOGIN_AUTH_TYPE, REGISTER_AUTH_TYPE } from "./constants";

export interface AuthPageProps {
  type: typeof REGISTER_AUTH_TYPE | typeof LOGIN_AUTH_TYPE;
}
