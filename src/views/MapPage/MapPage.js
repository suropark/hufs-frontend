import React from 'react';
import loadable from '@loadable/component';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
const MapContainer = loadable(() =>
  import('../../components/map/mapSection/MapContainer'),
);
const inforPage = loadable(() => import('../MapInforPage/MapInforPage'));
const ReviewPage = loadable(() => import('../ReviewPage/ReviewPage'));
function MapPage({ match }) {
  return (
    <>
     <Header /><Quick />
    /* jshint ignore:start */
    <BrowserRouter>
      <Switch>
        <Route exact path={`${match.path}`} component={MapContainer} />
        {/* <Route exact path={`${match.path}/info`} component = {inforPage}/> */}
        <Route
          exact
          path={`${match.path}/info/:name/:id/ReviewPage`}
          component={ReviewPage}
        />
        <Route
          exact
          path={`${match.path}/info/:name/:id`}
          component={inforPage}
        />
      </Switch>
    </BrowserRouter>
 <Footer />
</>
    /* jshint ignore:end */

  );
}

export default MapPage;
