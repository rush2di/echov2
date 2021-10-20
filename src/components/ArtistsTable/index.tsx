import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { tableIcon, TABLE_TITLE } from "./constants";
import "./styles.scss";

const ArtistsTable = ({ label, children }) => {
  return (
    <div className="artistsTable">
      <div className="artistsTable__head">
        <h3 className="txt-btn txt-sec txt-no-wrap">{TABLE_TITLE}</h3>
        <div className="txt-muted txt-sm">
          <div className="icon mx-1">
            <FontAwesomeIcon icon={tableIcon} />
          </div>
          <p>{label}</p>
        </div>
      </div>
      <hr className="mt-1 mb-2 mx-0" />
      <div className="artistsTable__body">{children}</div>
    </div>
  );
};

export default ArtistsTable;
