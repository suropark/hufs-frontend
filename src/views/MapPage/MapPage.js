import React from "react";
import { Route, Switch,BrowserRouter } from "react-router-dom";
import MapContainer from "../../components/map/mapSection/MapContainer";
import inforPage from "../MapInforPage/MapInforPage";
import ReviewPage from "../../components/map/reviewSection/ReviewPage";

function MapPage({match}) {
  return (
     /* jshint ignore:start */
    <BrowserRouter>
      <Switch>
        <Route exact path={match.path} component={MapContainer} />
        <Route path={`${match.path}/info`} component = {inforPage}/>
        {<Route path={`${match.path}/info/:name`} component = {inforPage}/>}
        <Route path={`${match.path}/info/:name/create`} component = {ReviewPage}/>
       

      </Switch>
    </BrowserRouter>
    /* jshint ignore:end */
      
    
  );
}

export default MapPage;
