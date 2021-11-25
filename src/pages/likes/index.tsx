import UserInfo from "containers/UserInfo";

const Likes = ({ currentUser }) => (
  <UserInfo currentUser={currentUser} pageType={"likes"} />
);

export default Likes;
