import React, { useState, useEffect, } from 'react';
import {
   useLocation,Route, Switch,BrowserRouter
} from 'react-router-dom';
//import StarPage from '../../components/map/reviewSection/starRating/StarPage';
import 'antd/dist/antd.css';
import { Rate } from 'antd';

import ReviewPage from '../../components/map/reviewSection/ReviewPage';

import ItemListContainer from "../../components/map/reviewSection/reviewContainer/ItemListContainer"
import ItemRegisterContainer from "../../components/map/reviewSection/reviewContainer/ItemRegisterContainer"
import ItemModifyContainer from "../../components/map/reviewSection/reviewContainer/ItemModifyContainer"
import ItemReadContainer from "../../components/map/reviewSection/reviewContainer/ItemReadContainer"
/*
import ReviewPostView from '../../components/map/reviewSection/ReviewPostView';
import ReviewPostList from '../../components/map/reviewSection/ReviewPostList';
*/

const InforPage = ({ match, history }) => {
  const {value, setVlue} = useState(0);
  const [state, setState] = useState('');

  const handleChange = value => {
    setState(value);
    history.push( {
      pathname:`${match.path}/create`,
      state: {value : value}}
      );
  };
/*
  useEffect(() => {
    console.log(history.location.state);
    fetch(`../../components/exampleInfo/store-seoul.json`)
      .then((res) => res.json)
      .then((res) => setState({ state: res }));
  }, []);
  */

  const location = useLocation();


  return (
     /* jshint ignore:start */
    <>
    
      <div>
        <h1>{location.state.name}</h1>
      </div>
      <div>
        <h4>지번주소 : {location.state.name}</h4>
        
        <h5>도로명주소 :</h5>
        </div>

        <div>
        <h1></h1>
      </div>
    
      <div>
      <Rate allowHalf defaultValue={2.5} onChange={handleChange} value = {value} />
      </div>
      <div>
        {/*
        <Switch>
          <Route
            exact
            path={`${match.path}`}
            component={ReviewPostList}
          />
          */}
          <ItemListContainer/>
        <Route component={ItemRegisterContainer} path={`${match.path}/create`} exact />
        <Route component={ItemModifyContainer} path={`${match.path}/:itemid`} exact />
        <Route component={ItemReadContainer} path={`${match.path}/read/:itemid`} exact />
          {/*
          <Route
            path={`${match.path}/info/${match.params.name}/:item`}
            component={ReviewPostView}
          />
        </Switch>
          */}
          
      </div>
    </>
     /* jshint ignore:end */
    
  );
};

export default InforPage;