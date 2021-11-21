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

import ErrorBoundary from "components/ErrorBoundary";
import Spinner from "components/Spinner";
import Layout from "containers/Layout";

import { LOGIN_AUTH_TYPE, REGISTER_AUTH_TYPE } from "pages/auth/constants";
import { onAuthStateChanged } from "firebase/auth";
import { getUserData } from "service/axios";
import { auth } from "firebase";

import PlaylistPage from "pages/playlist";
import HomePage from "pages/home";
import AuthPage from "pages/auth";

import {
  requestPlaylistsData,
  setSerializedState,
  authLoginSuccess,
} from "./actions";
import { makeSelectDefaultPlaylist, makeSelectStartState } from "./selectors";
import { AppRoutesProps, PlaylistDataType } from "./types";
import { isNull } from "lodash";
import Downloads from "pages/downloads";

const hyderationState = createStructuredSelector({
  mainState: makeSelectStartState(),
  defaultPlaylist: makeSelectDefaultPlaylist(),
});

const App = () => {
  const dispatch = useDispatch();
  const {
    defaultPlaylist,
    mainState: { data, isLoading, isError, currentUser },
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
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
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

// const AppRoutes = ({ data, defaultPlaylist }: AppRoutesProps) => {
//   return (
//     <>
//       <Route exact path="/">
//         <HomePage data={data as PlaylistDataType[]} />
//       </Route>
//       <Route exact path="/playlist">
//         {defaultPlaylist !== null ? (
//           <Redirect to={`/playlist/${defaultPlaylist}`} />
//         ) : (
//           <PlaylistPage data={data as PlaylistDataType[]} />
//         )}
//       </Route>
//       <Route path="/playlist/:id">
//         <PlaylistPage data={data as PlaylistDataType[]} />
//       </Route>
//       <Route exact path="/login">
//         <AuthPage type={LOGIN_AUTH_TYPE} />
//       </Route>
//       <Route exact path="/register">
//         <AuthPage type={REGISTER_AUTH_TYPE} />
//       </Route>
//     </>
//   );
// };

export default App;
