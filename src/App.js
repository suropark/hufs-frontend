import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Post from './views/PostPage/Post';
import LandingPage from './views/LandingPage/LandingPage';
import PostEdit from './components/post/PostEdit';
// import ImageTest from './testJS/ImageTest';
// import TestView from './testJS/TestView';
import MyPage from './views/MyPage/MyPage';
import './App.css';

function App() {
  return (
    <Router>
      {/* <header> 항상 보여요 header</header> */}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/list" component={Post} />
        {/* <Route path="/info" component={InfoPage} /> */}
        {/* <Route path="/scholar" component={ScholarShipPage} /> */}
        <Route path="/mypage" component={MyPage} />
        <Route path="/edit" component={PostEdit} />
        {/* <Route path="/test" component={ImageTest} /> */}
        {/* <Route path="/testView" component={TestView} /> */}
      </Switch>
      {/* <footer>항상 보여요 footer</footer> */}
    </Router>
  );
}

export default App;
