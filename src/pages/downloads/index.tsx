import UserInfo from "containers/UserInfo";

const Downloads = ({ currentUser }) => (
  <UserInfo currentUser={currentUser} pageType={"downloads"} />
);

export default Downloads;
