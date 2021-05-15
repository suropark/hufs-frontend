import React from 'react';
import loadable from '@loadable/component';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Quick from '../Quick/Quick';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const MapContainer = loadable(() =>
  import('../../components/map/mapSection/MapContainer'),
);
const ReviewEdit = loadable(() => import('../../components/map/reviewSection/newReviewSection/ReviewEdit'));

const ReviewPage = loadable(() => import('../ReviewPage/ReviewPage'));
const ReviewUpdate = loadable(() => import('../../components/map/reviewSection/newReviewSection/ReviewUpdate'));
function MapPage({ match }) {

  return (
    <>
      <Header />
      <Quick />
      <BrowserRouter>
        <Switch>
          <Route exact path={`${match.path}`} component={MapContainer} />
          <Route
            exact
            path={`${match.path}/info/:name/:id/ReviewPage`}
            component={ReviewPage}
          />
          <Route path={`${match.path}/register`} component={ReviewEdit} />
          <Route exact path={`${match.path}/edit`} component={ReviewUpdate} />

        </Switch>
      </BrowserRouter>
      <Footer />
    </>
    /* jshint ignore:end */
  );
}

export default MapPage;
