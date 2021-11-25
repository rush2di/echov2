import { ReactNode } from "react";

import { AppStateType } from "containers/App/types";

export interface ErrorBoundaryProps {
  isError: boolean | null;
  children: ReactNode;
}
