import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import {
  inputFieldErrorIcon,
  inputFieldPassword,
  inputFieldStats,
} from "./constants";
import { InputFieldProps } from "./types";
import "./styles.scss";

const InputField = ({
  state = inputFieldStats.default,
  label,
  icon,
  name,
  type,
  feedback,
  placeholder,
  onChange,
  onClick,
}: InputFieldProps) => {
  const iconExits = !!icon && name === inputFieldPassword.name;
  const isPassword = name === inputFieldPassword.name;

  const iconNotice = (
    state == inputFieldStats.error ? inputFieldErrorIcon : icon
  ) as IconProp;

  return (
    <div className="inputField">
      {!!label && (
        <label className="txt-btn txt-sec" htmlFor={name}>
          {label}
        </label>
      )}
      <div className={`inputField__wrapper --${state}`}>
        <input
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          type={type}
        />
        <div className="icon txt-sm">
          {iconExits && isPassword && (
            <div className="show-icon" onClick={onClick}>
              <FontAwesomeIcon icon={icon} />
            </div>
          )}
          {iconExits && !isPassword && <FontAwesomeIcon icon={iconNotice} />}
        </div>
      </div>
      <p className={`inputField__feedback txt-sm --${state}`}>{feedback}</p>
    </div>
  );
};

export default InputField;
