import React, { useState, useEffect, } from 'react';
import {
  BrowserRouter as Router,
  Route,
  useParams,
  Switch,
  useHistory,
   useLocation
} from 'react-router-dom';
import ReviewPage from '../../components/map/reviewSection/ReviewPage';
import ReviewPostView from '../../components/map/reviewSection/ReviewPostView';
import ReviewPostList from '../../components/map/reviewSection/ReviewPostList';

const InforPage = ({ match, history }) => {
  const [state, setState] = useState('');

  useEffect(() => {
    console.log(history.location.state);
    fetch(`../../components/mapSection/store-seoul.json`)
      .then((res) => res.json)
      .then((res) => setState({ state: res }));
  }, []);

  const location = useLocation();


  return (
    <>
      <div>
        <h1>{location.state.name}</h1>
      </div>
      <div>
        <h4>지번주소 : {location.state.numAddress}</h4>
        
        <h5>도로명주소 : {location.state.roadAddress}</h5>
        </div>
        <div>
        <h1>{location.state.StoreSubCategory}</h1>
      </div>
      <div>
        {/*
        <Switch>
          <Route
            exact
            path={`${match.path}`}
            component={ReviewPostList}
          />
          {
          <Route
            path={`${match.path}/info/${match.params.name}/create`}
            component={ReviewPage}
          />
          <Route
            path={`${match.path}/info/${match.params.name}/:item`}
            component={ReviewPostView}
          />
        </Switch>
          */}
      </div>
    </>
  );
};

export default InforPage;