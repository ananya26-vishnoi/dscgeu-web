import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Importing Pages
import Home from "./pages/Home";
import Register from "./pages/Register";
import Join from "./pages/Join";

//Importing Components
import Domains from "./pages/Domains";
import Why from "./pages/Why";
import RedirectLinks from "./pages/RedirectLinks";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Route path="/join" exact component={Join} />
          <Route path="/why" exact component={Why} />
          <Route path="/domains" exact component={Domains} />
          <Route path="/induction" exact component={RedirectLinks} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
