import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Post from './views/PostPage/Post';
import LandingPage from './views/LandingPage/LandingPage';
import PostEdit from './components/post/PostEdit';
function App() {
  return (
    <Router>
      {/* <header> 항상 보여요 header</header> */}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/list" component={Post} />
        <Route path="/edit" component={PostEdit} />
      </Switch>
      {/* <footer>항상 보여요 footer</footer> */}
    </Router>
  );
}

export default App;
