import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostList from '../../components/post/PostList';
import PostUpdate from '../../components/post/PostUpdate';
import PostView from '../../components/post/PostView';
import PostEdit from '../../components/post/PostEdit';
import Header from '../Header/Header';
import Quick from '../Quick/Quick';
import Footer from '../Footer/Footer';
function Post({ match }) {
  return (
    <>
      <Header /> <Quick />
      <Switch>
        <Route path={`${match.path}/edit`} component={PostEdit} />
        <Route exact path={`${match.path}/:id`} component={PostView} />
      </Switch>
      <Route exact path={match.path} component={PostList} />
      <Route exact path={`${match.path}/:id/update`} component={PostUpdate} />
      <Footer />
    </>
  );
}

export default Post;
