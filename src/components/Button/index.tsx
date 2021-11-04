import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonProps } from "./types";

const Button = (props: ButtonProps) => {
  const { classNames, label, icon, onClick, children, ...rest } = props;

  if (icon) {
    return (
      <button {...rest} className={`btn ${classNames}`}>
        <FontAwesomeIcon icon={icon} />
        <p>{label}</p>
      </button>
    );
  }

  if (children) {
    return (
      <button {...rest} className={`btn ${classNames}`}>
        {children}
      </button>
    );
  }

  return (
    <button {...rest} className={`btn ${classNames}`}>
      {label}
    </button>
  );
};

export default Button;
