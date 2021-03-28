import React, { useState, useEffect, } from 'react';
import {
   useLocation,Route, Switch,BrowserRouter
} from 'react-router-dom';
//import StarPage from '../../components/map/reviewSection/starRating/StarPage';
import 'antd/dist/antd.css';
import { Rate } from 'antd';
import ReviewPage from '../ReviewPage/ReviewPage'

import ItemRegisterFrom from '../../components/map/reviewSection/ItemRegisterForm';
import ItemList from '../../components/map/reviewSection/ItemList.js';

import ItemListContainer from "../../components/map/reviewSection/reviewContainer/ItemListContainer"
import ItemRegisterContainer from "../../components/map/reviewSection/reviewContainer/ItemRegisterContainer"
import ItemModifyContainer from "../../components/map/reviewSection/reviewContainer/ItemModifyContainer"
import ItemReadContainer from "../../components/map/reviewSection/reviewContainer/ItemReadContainer"
/*
import ReviewPostView from '../../components/map/reviewSection/ReviewPostView';
import ReviewPostList from '../../components/map/reviewSection/ReviewPostList';
*/

const InforPage = ({match,history,props }) => {
  const {value, setVlue} = useState(0);
  const [state, setState] = useState('');
  

  const location = useLocation();

  const handleChange = value => {
    setState(value);
    console.log('mapinfo', props);
    console.log(match)
    // map/info -> map/info/:name 24시해장국
    history.push( { // map/info/:name/24시해장국/reviewpage
      pathname:`${match.url}/ReviewPage`,
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


  return (
     /* jshint ignore:start */
    <>
    
      <div>
        <h1>{location.state.name}</h1>
      </div>
      <div>
        <h4>지번주소 : {location.state.numAddress}</h4>
        
        <h5>도로명주소 : {location.state.roadAddress}</h5>
        </div>

        <div>
        <h1></h1>
      </div>
    
      <div>
      <Rate allowHalf defaultValue={2.5} onChange={handleChange} value = {value}>
        </Rate>
        <p>별점 클릭 : 리뷰 보러가기</p>
      {/*<ItemListContainer/>*/}

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