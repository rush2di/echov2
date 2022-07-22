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
import HomeSkeleton from "containers/Home/skeleton";
import PlaylistSkeleton from "containers/Playlist/skeleton";
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
              <Route exact path="/">
                {isNull(data) ? (
                  <HomeSkeleton />
                ) : (
                  <HomePage data={data as PlaylistDataType[]} />
                )}
              </Route>
              <Route exact path="/playlist">
                {isNull(defaultPlaylist) ? (
                  <PlaylistPage data={data as PlaylistDataType[]} />
                ) : (
                  <Redirect to={`/playlist/${defaultPlaylist}`} />
                )}
              </Route>
              <Route path="/playlist/:id">
                {isNull(data) ? (
                  <PlaylistSkeleton />
                ) : (
                  <PlaylistPage data={data as PlaylistDataType[]} />
                )}
              </Route>
              <Route exact path="/login">
                {isNull(currentUser.uid) ? (
                  <AuthPage type={LOGIN_AUTH_TYPE} />
                ) : (
                  <Redirect exact to="/" />
                )}
              </Route>
              <Route exact path="/register">
                {isNull(currentUser.uid) ? (
                  <AuthPage type={REGISTER_AUTH_TYPE} />
                ) : (
                  <Redirect exact to="/" />
                )}
              </Route>
              <Route exact path="/downloads">
                {isNull(currentUser.uid) ? (
                  <Redirect exact to="/" />
                ) : (
                  <Downloads currentUser={currentUser} />
                )}
              </Route>
              <Route exact path="/likes">
                {isNull(currentUser.uid) ? (
                  <Redirect exact to="/" />
                ) : (
                  <Likes currentUser={currentUser} />
                )}
              </Route>
            </ErrorBoundary>
          </Layout>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
