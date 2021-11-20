import Loader from "react-loader-spinner";
import "./styles.scss";

const Spinner = () => {
  return (
    <div className="spinner__wrapper">
      <Loader
        type="Oval"
        color="#5b647c"
        height={50}
        width={50}
      />
    </div>
  );
};

export default Spinner;
