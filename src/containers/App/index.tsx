import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ToastContainer } from "react-toastify";
import { isNull } from "lodash";

import DisclaimerContainer from "containers/DisclaimerContainer";
import ErrorBoundary from "components/ErrorBoundary";
import Spinner from "components/Spinner";
import Layout from "containers/Layout";

import { LOGIN_AUTH_TYPE, REGISTER_AUTH_TYPE } from "pages/auth/constants";
import { onAuthStateChanged } from "firebase/auth";
import { getUserData } from "service/axios";
import { auth } from "firebase";

import PlaylistPage from "pages/playlist";
import Downloads from "pages/downloads";
import HomePage from "pages/home";
import AuthPage from "pages/auth";

import { makeSelectDefaultPlaylist, makeSelectStartState } from "./selectors";
import { PlaylistDataType } from "./types";
import {
  requestPlaylistsData,
  setSerializedState,
  authLoginSuccess,
} from "./actions";
import { toastProps } from "./constants";
import Likes from "pages/likes";

const hyderationState = createStructuredSelector({
  mainState: makeSelectStartState(),
  defaultPlaylist: makeSelectDefaultPlaylist(),
});

const App = () => {
  const dispatch = useDispatch();
  const {
    defaultPlaylist,
    mainState: { data, isError, currentUser },
  } = useSelector(hyderationState);

  useEffect(() => {
    const storedData = sessionStorage.getItem("echoState") as string;
    const parsedData: { data: PlaylistDataType } = JSON.parse(storedData);

    if (parsedData && parsedData.data !== null) {
      dispatch(setSerializedState(parsedData));
    } else {
      dispatch(requestPlaylistsData());
    }

    onAuthStateChanged(auth, (user) => {
      if (!user) return;
      getUserData(user).then((res) => {
        dispatch(authLoginSuccess(res.data, false));
      });
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Layout>
            <ToastContainer {...toastProps} />
            {!isNull(defaultPlaylist) && <DisclaimerContainer />}
            <ErrorBoundary isError={isError}>
              <SyncedRoute exact path="/" dependency={data}>
                <HomePage data={data as PlaylistDataType[]} />
              </SyncedRoute>
              <SyncedRoute exact path="/playlist" dependency={data}>
                {isNull(defaultPlaylist) ? (
                  <PlaylistPage data={data as PlaylistDataType[]} />
                ) : (
                  <Redirect to={`/playlist/${defaultPlaylist}`} />
                )}
              </SyncedRoute>
              <SyncedRoute path="/playlist/:id" dependency={data}>
                <PlaylistPage data={data as PlaylistDataType[]} />
              </SyncedRoute>
              <SyncedRoute exact path="/login" dependency={data}>
                {isNull(currentUser.uid) ? (
                  <AuthPage type={LOGIN_AUTH_TYPE} />
                ) : (
                  <Redirect exact to="/" />
                )}
              </SyncedRoute>
              <SyncedRoute exact path="/register" dependency={data}>
                {isNull(currentUser.uid) ? (
                  <AuthPage type={REGISTER_AUTH_TYPE} />
                ) : (
                  <Redirect exact to="/" />
                )}
              </SyncedRoute>
              <SyncedRoute exact path="/downloads" dependency={currentUser.uid}>
                {isNull(currentUser.uid) ? (
                  <Redirect exact to="/" />
                ) : (
                  <Downloads currentUser={currentUser} />
                )}
              </SyncedRoute>
              <SyncedRoute exact path="/likes" dependency={currentUser.uid}>
                {isNull(currentUser.uid) ? (
                  <Redirect exact to="/" />
                ) : (
                  <Likes currentUser={currentUser} />
                )}
              </SyncedRoute>
            </ErrorBoundary>
          </Layout>
        </Switch>
      </div>
    </Router>
  );
};

const SyncedRoute = ({ dependency, path, exact = false, children }) => {
  return (
    <Route {...{ path, exact }}>
      {isNull(dependency) ? <Spinner /> : children}
    </Route>
  );
};

export default App;
