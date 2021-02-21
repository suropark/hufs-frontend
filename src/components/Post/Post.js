import React from "react";
import { Route } from "react-router-dom";
import PostList from "./PostList";
import PostView from "./PostView";

function Post({ match }) {
  return (
    <div>
      <Route exact path={match.path} component={PostList} />
      <Route path={`${match.path}/:id`} component={PostView} />
    </div>
  );
}

export default Post;
