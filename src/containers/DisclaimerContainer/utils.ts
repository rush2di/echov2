import { isNull } from "lodash";

const populateStorage = () => {
  localStorage.setItem("userApproved", JSON.stringify({ userApproved: true }));
};

const isAlreadyApproved = () => {
  const local = localStorage.getItem("userApproved");
  if (isNull(local)) {
    return false;
  } else {
    return true;
  }
};

export { populateStorage, isAlreadyApproved };
