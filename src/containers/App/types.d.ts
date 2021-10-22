export interface AppStateType {
  data: AppContentType[];
  selected: boolean | null;
}

export interface AppContentType {
  id: number;
  title: string;
  bg: string;
}
