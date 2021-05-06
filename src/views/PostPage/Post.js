import React from 'react';
import loadable from '@loadable/component';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Quick from '../Quick/Quick';
import Footer from '../Footer/Footer';
const PostEdit = loadable(() => import('../../components/post/PostEdit'));
const PostView = loadable(() => import('../../components/post/PostView'));
const PostList = loadable(() => import('../../components/post/PostList'));
const PostUpdate = loadable(() => import('../../components/post/PostUpdate'));
function Post({ match }) {

  return (
    <>
      <Header />

      <Switch>
        <Route exact path={`${match.path}/edit`} component={PostEdit} />
        <Route exact path={`${match.path}/:id`} component={PostView} />
        <Route exact path={`${match.path}/:id/update`} component={PostUpdate} />
        <Route exact path={match.path} component={PostList} />
      </Switch>
      <Footer />
    </>
  );
}

export default Post;
