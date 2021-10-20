import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

import "./styles.scss"

export interface ArtistsTable {
  title: string;
  label: string; // pattern = from 75 artists
  children?: ReactNode;
}

const ArtistsTable = ({ label, children }) => {
  return (
    <div className="artistsTable">
      <div className="artistsTable__head">
        <h3 className="txt-btn txt-sec txt-no-wrap">Top Artists</h3>
        <div className="txt-muted txt-sm">
          <div className="icon mx-1">
            <FontAwesomeIcon icon={["fas", "hand-holding-heart"]} />
          </div>
          <p>{label}</p>
        </div>
      </div>
      <hr className="mt-1 mb-2 mx-0"/>
      <div className="artistsTable__body">{children}</div>
    </div>
  );
};

export default ArtistsTable;
