import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { toggleBtnIcon } from "./constants";

const ToggleButton = () => {
  return (
    <button className="toggleButton">
      <FontAwesomeIcon icon={toggleBtnIcon} />
    </button>
  );
};

export default ToggleButton;
