import { useEffect, useState } from "react";

import Disclaimer from "components/Disclaimer";
import "./styles.scss";
import { isAlreadyApproved, populateStorage } from "./utils";

const DisclaimerContainer = () => {
  let timeout;

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [userApproved, setUserApproved] = useState<boolean>(false);

  const visbilityClasses = isVisible ? "--visible" : "--hidden";

  const handleClick = () => {
    populateStorage();
    setIsVisible(false);
    timeout = setTimeout(() => {
      setUserApproved(true);
    }, 1500);
  };

  useEffect(() => {
    if (isAlreadyApproved()) {
      setUserApproved(true);
      setIsVisible(false);
    } else {
      timeout = setTimeout(() => {
        setIsVisible(true);
      }, 4000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={`disclaimerContainer ${visbilityClasses}`}>
      {!userApproved && (
        <div className="disclaimerContainer__body">
          <Disclaimer onClick={handleClick} />
        </div>
      )}
    </div>
  );
};

export default DisclaimerContainer;
