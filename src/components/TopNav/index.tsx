import InputField from "components/InputField";
import { inputFieldSearchBar } from "./constants";
import "./styles.scss";

const TopNav = () => (
  <div className="container__fluid py-1 topNav">
    <div className="row">
      <div className="col-4">
        <InputField {...inputFieldSearchBar} />
      </div>
    </div>
  </div>
);

export default TopNav;
