import { saveUserToDB } from "./axios";

const structureUserDB = (response: any, displayName: any): any => {
  response.user.updateProfile({
    displayName,
  });
};

export { structureUserDB };
