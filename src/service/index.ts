import { saveUserToDB } from "./axios";

const structureUserDB = (response: any, displayName: any): any => {
  console.log("called", response, displayName);
  response.user.updateProfile({
    displayName,
  });
  // return saveUserToDB(response.user);
};

export { structureUserDB };
