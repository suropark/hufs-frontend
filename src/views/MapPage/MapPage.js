import React from "react";
import { Route, Switch,BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../components/map/Store";
import Map from "../components/map/MapContainer";
import inforPage from "../components/map/InforPage.js";
import ReviewPage from "../components/map/ReviewPage";

function App() {
  return (
<Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Map} />
        <Route exact path={`/info`} component = {inforPage}/>
        <Route path={`/info/:title`} component = {inforPage}/>
        <Route path={`/info/:title/create`} component = {ReviewPage}/>
       

      </Switch>
    </BrowserRouter>
  </Provider >
      
    
  );
}

export default App;
