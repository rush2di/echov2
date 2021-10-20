import { ReactNode } from "react";

export interface ArtistsTable {
  title: string;
  label: string; // pattern = from 75 artists
  children?: ReactNode;
}
