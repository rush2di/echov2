import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { firebaseConfig } from "./variables";

const config = { ...firebaseConfig };

const app = initializeApp(config);
const auth = getAuth(app);

export { auth };
