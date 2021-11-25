import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { toggleBtnIcon } from "./constants";

const ToggleButton = ({ onClick }) => {
  return (
    <button className="toggleButton" onClick={onClick}>
      <FontAwesomeIcon icon={toggleBtnIcon} />
    </button>
  );
};

export default ToggleButton;
