import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectAppContent } from "./selectors";
import { requestPlaylistsData, setSerializedState } from "./actions";
import { AppStateType, PlaylistDataType } from "./types";

import Layout from "containers/Layout";
// import Test from "containers/Tests";
import HomePage from "pages/home";
import PlaylistPage from "pages/playlist";

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
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage {...{ data, isLoading, isError }} />
            </Route>
            <Route path="/platlist/:id">
              <PlaylistPage {...{ data, isLoading, isError }} />
            </Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
