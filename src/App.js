import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Post from './views/PostPage/Post';
import LandingPage from './views/LandingPage/LandingPage';
import MyPage from './views/MyPage/MyPage';
import './App.css';
import LoginPage from './views/LoginPage/LoginPage';
import CalendarPage from './views/CalendarPage/CalendarPage';

function App() {
  return (
    <Router>
      {/* <header> 항상 보여요 header</header> */}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/list" component={Post} />
        <Route path="/community" component={Post} />
        <Route path="/life" component={Post} />
        <Route path="/1" component={Post} />
        <Route path="/2" component={Post} />
        <Route path="/login" component={LoginPage} />
        <Route path="/calendar" component={CalendarPage} />
        <Route path="/mypage" component={MyPage} />
      </Switch>
      {/* <footer>항상 보여요 footer</footer> */}
    </Router>
  );
}

export default App;
