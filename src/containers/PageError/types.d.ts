import { ReactNode } from "react";

import { AppStateType } from "containers/App/types";

export interface pageErrorProps extends Omit<AppStateType, "data"> {
  children: ReactNode;
}
