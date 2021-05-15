import React from 'react';
import loadable from '@loadable/component';
import { Route, Switch } from 'react-router-dom';
const ReviewEdit = loadable(() => import('../../components/map/reviewSection/newReviewSection/ReviewEdit'));
const ReviewView = loadable(() => import('../../components/map/reviewSection/newReviewSection/ReviewView'));
const ReviewList = loadable(() => import('../../components/map/reviewSection/newReviewSection/ReviewList'));
const ReviewUpdate = loadable(() => import('../../components/map/reviewSection/newReviewSection/ReviewUpdate'));
function ReviewPage(props) {
  return (
    <>
      <Switch>
        {/* <Route path="/register" component={ReviewEdit} /> */}
        <Route exact path={`${props.match.url}/:id`} component={ReviewView} />
     
      <Route exact path={props.match.url}component={ReviewList} />
      {/* <Route exact path={`${props.match.url}/:id/update`} component={ReviewUpdate} /> */}
      </Switch>
    </>
  );
}

export default ReviewPage;
