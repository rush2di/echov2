import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "containers/common/Layout";
import Test from "containers/Tests";

const App = () => (
  <Router>
    <div className="app">
      <Layout>
        <Switch>
          <Route path="/tests">
            <Test />
          </Route>
        </Switch>
      </Layout>
    </div>
  </Router>
);

export default App;
