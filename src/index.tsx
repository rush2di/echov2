import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import App from "containers/App";
import store from "store/store";
import "styles/main.scss";

library.add(fas, far);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
