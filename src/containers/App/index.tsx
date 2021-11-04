import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Layout from "containers/Layout";
import { requestPlaylistsData, setSerializedState } from "./actions";
import { AppStateType, PlaylistDataType } from "./types";
import { selectAppContent } from "./selectors";

import PlaylistPage from "pages/playlist";
import HomePage from "pages/home";
import AuthPage from "pages/auth";
import { LOGIN_AUTH_TYPE, REGISTER_AUTH_TYPE } from "pages/auth/constants";

const App = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector<AppStateType, AppStateType>(
    selectAppContent
  );

  useEffect(() => {
    const storedData = sessionStorage.getItem("echoState") as string;
    const parsedData: { data: PlaylistDataType } = JSON.parse(storedData);

    if (parsedData && parsedData.data !== null) {
      dispatch(setSerializedState(parsedData));
    } else {
      dispatch(requestPlaylistsData());
    }
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Layout>
            <Route exact path="/">
              <HomePage {...{ data, isLoading, isError }} />
            </Route>
            <Route exact path="/playlist">
              {data !== null ? (
                <Redirect to={`/playlist/${data[0].id}`} />
              ) : (
                <PlaylistPage {...{ data, isLoading }} isError />
              )}
            </Route>
            <Route path="/playlist/:id">
              <PlaylistPage {...{ data, isLoading, isError }} />
            </Route>
            <Route exact path="/login">
              <AuthPage type={LOGIN_AUTH_TYPE} />
            </Route>
            <Route exact path="/register">
              <AuthPage type={REGISTER_AUTH_TYPE} />
            </Route>
          </Layout>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
