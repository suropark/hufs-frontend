import React from 'react';
import loadable from '@loadable/component';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './App2.css';
import './Media.css';
const Post = loadable(() => import('./views/PostPage/Post'));
const LandingPage = loadable(() => import('./views/LandingPage/LandingPage'));
const MyPage = loadable(() => import('./views/MyPage/MyPage'));
const CalendarPage = loadable(() =>
  import('./views/CalendarPage/CalendarPage'),
);
const SignUpModal = loadable(() =>
  import('./components/login/modals/SignUpModal'),
);
const Page404 = loadable(() => import('./views/Page404/Page404'));
const EmailAuthPage = loadable(() =>
  import('./views/EmailAuthPage/EmailAuthPage'),
);
const MapPage = loadable(() => import('./views/MapPage/MapPage'));
const SearchPage = loadable(() => import('./views/SearchPage/SearchPage'));
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={SignUpModal} />
        <Route exact path="/search" component={SearchPage} />
        <Route path="/1" component={Post} />
        <Route path="/2" component={Post} />
        <Route path="/3" component={Post} />
        <Route path="/4" component={Post} />
        <Route path="/5" component={Post} />
        <Route path="/6" component={Post} />
        <Route path="/redirect" component={SignUpModal} />
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
