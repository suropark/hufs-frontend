import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import MapContainer from "../../components/map/mapSection/MapContainer";
import inforPage from "../MapInforPage/MapInforPage";
import ReviewPage from "../ReviewPage/ReviewPage"
import Header from '../Header/Header';
import Quick from '../Quick/Quick';
import Footer from '../Footer/Footer';
import './Map.css'

function MapPage({ match }) {
  return (
    <>
      <Header /><Quick />


      <BrowserRouter>
        <Switch>
          <Route exact path={`${match.path}`} component={MapContainer} />
          {/* <Route exact path={`${match.path}/info`} component = {inforPage}/> */}
          <Route exact path={`${match.path}/info/:name/:id/ReviewPage`} component={ReviewPage} />
          <Route exact path={`${match.path}/info/:name/:id`} component={inforPage} />





        </Switch>
      </BrowserRouter>
      <Footer />
    </>
    /* jshint ignore:end */


  );
}

export default MapPage;
