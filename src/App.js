import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Post from './views/PostPage/Post';
import LandingPage from './views/LandingPage/LandingPage';
import MyPage from './views/MyPage/MyPage';
import MapPage from './views/MapPage/MapPage';
import './App.css';
import './App2.css';
import LoginPage from './views/LoginPage/LoginPage';
import CalendarPage from './views/CalendarPage/CalendarPage';
import Board from './views/Board/Board';
import Page404 from './views/Page404/Page404';
import EmailAuthPage from './views/EmailAuthPage/EmailAuthPage';
import SignUpModal from './components/login/modals/SignUpModal';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={SignUpModal} />
        <Route path="/1" component={Post} />
        <Route path="/2" component={Post} />
        <Route path="/3" component={Post} />
        <Route path="/4" component={Post} />
        <Route path="/5" component={Post} />
        <Route path="/6" component={Post} />
        <Route path="/redirect" component={SignUpModal} />
        <Route path="/board" component={Board} />
        <Route path={`/user/email`} component={EmailAuthPage} />
        <Route path="/map" component={MapPage} />
        <Route path="/calendar" component={CalendarPage} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/auth" component={EmailAuthPage} />
        <Route path="*" component={Page404} />
      </Switch>
      {/* <footer>항상 보여요 footer</footer> */}
    </Router>
  );
}

export default App;
