import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectAppContent } from "./selectors";
import { AppContentType, AppStateType } from "./types";

import Layout from "containers/Layout";
import Test from "containers/Tests";
import HomePage from "pages/home";

const App = () => {
  const appData = useSelector<AppStateType, AppContentType[]>(selectAppContent);

  return (
    <Router>
      <div className="app">
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage appData={appData} />
            </Route>
            <Route path="/tests">
              <Test />
            </Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
