import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToggleButton = () => {
  return (
    <button className="toggleButton">
      <FontAwesomeIcon icon={["fas", "arrow-circle-right"]} />
    </button>
  );
};

export default ToggleButton;
