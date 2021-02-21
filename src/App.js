import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Post from "./components/Post/Post";
import LandingPage from "./views/LandingPage/LandingPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/list" component={Post} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
