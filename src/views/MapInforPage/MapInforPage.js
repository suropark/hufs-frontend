import React, { useState, useEffect } from 'react';
import { useLocation, Route, Switch, BrowserRouter } from 'react-router-dom';
import { List, Avatar, Card, Button, Typography } from 'antd';
import numIcon from '../../components/map/mapSection/mapData/icon1.png';
import roadIcon from '../../components/map/mapSection/mapData/icon2.png';
//import StarPage from '../../components/map/reviewSection/starRating/StarPage';
import 'antd/dist/antd.css';

/*
import ReviewPostView from '../../components/map/reviewSection/ReviewPostView';
import ReviewPostList from '../../components/map/reviewSection/ReviewPostList';
*/

const { Text, Title } = Typography;

const InforPage = ({ match, history, props }) => {
  const { value, setVlue } = useState(0);
  const [state, setState] = useState('');

  const location = useLocation();

  const data = [
    {
      title: '지번주소',
      description: location.state.numAddress,
      img: numIcon,
    },
    {
      title: '도로명주소',
      description: location.state.roadAddress,
      img: roadIcon,
    },
  ];

  const handleChange = (e) => {
    // map/info -> map/info/:name 24시해장국
    history.push({
      // map/info/:name/24시해장국/reviewpage
      pathname: `${match.url}/ReviewPage`,
      state: {
        id: match.params.id,
      },
    });
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
    <div style={{ width: '400px', margin: '0 auto', paddingTop: '150px' }}>
      <div>
        <Title level={3}>{location.state.name}</Title>
      </div>
      <div>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.img} />}
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </div>

      <div>
        <Button
          onClick={(e) => {
            // map/info -> map/info/:name 24시해장국
            history.push({
              // map/info/:name/24시해장국/reviewpage
              pathname: `${match.url}/ReviewPage`,
              state: {
                id: match.params.id,
              },
            });
          }}
        >
          리뷰 보러가기
        </Button>
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
    </div>
    /* jshint ignore:end */
  );
};

export default InforPage;
