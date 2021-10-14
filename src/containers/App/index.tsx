import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Test from "containers/Tests"

const App = () => (
  <Router>
    <div className="app">
      <Switch>
        <Route path="/tests">
          <Test />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;