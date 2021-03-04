import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostList from '../../components/post/PostList';
import PostUpdate from '../../components/post/PostUpdate';
import PostView from '../../components/post/PostView';
function Post({ match }) {
  return (
    <div>
      <Route exact path={match.path} component={PostList} />
      <Route exact path={`${match.path}/:id`} component={PostView} />
      <Route path={`${match.path}/:id/update`} component={PostUpdate} />
    </div>
  );
}

export default Post;
