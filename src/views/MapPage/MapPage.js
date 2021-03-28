import React from "react";
import { Route, Switch,BrowserRouter } from "react-router-dom";
import MapContainer from "../../components/map/mapSection/MapContainer";
import inforPage from "../MapInforPage/MapInforPage";
import ReviewPage from "../ReviewPage/ReviewPage"

function MapPage({match}) {
  return (
     /* jshint ignore:start */
    <BrowserRouter>
      <Switch>
        <Route exact path={`${match.path}`} component={MapContainer} />
        {/* <Route exact path={`${match.path}/info`} component = {inforPage}/> */}
        <Route exact path={`${match.path}/info/:name/ReviewPage`} component = {ReviewPage}/>
        <Route exact path={`${match.path}/info/:name`} component = {inforPage}/>
       

      </Switch>
    </BrowserRouter>
    /* jshint ignore:end */
      
    
  );
}

export default MapPage;
