import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { tableIcon, TABLE_TITLE } from "./constants";
import { ArtistsTableProps } from "./types";
import "./styles.scss";

const Table = ({ title = TABLE_TITLE, label, children }: ArtistsTableProps) => {
  return (
    <div className="Table">
      <div className="Table__head">
        <h3 className="txt-btn txt-sec txt-no-wrap">{title}</h3>
        <div className="txt-muted txt-sm">
          {label && (
            <>
              <div className="icon mx-1">
                <FontAwesomeIcon icon={tableIcon} />
              </div>
              <p>{label}</p>
            </>
          )}
        </div>
      </div>
      <hr className="mt-1 mb-2 mx-0" />
      <ul className="Table__body">{children}</ul>
    </div>
  );
};

export default Table;
