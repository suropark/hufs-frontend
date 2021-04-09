import React, { useState } from 'react';
import KaKaoMap from './KakaoMap';
import storeSeoul from './mapData/store-seoul.json';
import storeGlobal from './mapData/store-global.json'
import Card from './Card.js';
import SearchBar from './SearchBar.js';
import mapboo from '../../../banner/mapboo.png';
import { Button, Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';


const MapContainer = ({match}) => {
  const [data, setData] = useState(storeSeoul);
  const [lat, setLat] = useState(37.59732049638715); // default 서울캠
  const [lng, setLng] = useState(127.0588283395548);

  const searchData = (pattern) => {
    if (!pattern) {
      setData(storeSeoul);
      return;
    }
  }



  return (
    <div className="Map">
      <div className="Map-left">
        <div className="navi">

          <Breadcrumb>
            <Breadcrumb.Item href="http://localhost:3000/">
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="http://localhost:3000/mypage">
              next
            </Breadcrumb.Item>
            <Breadcrumb.Item>Now</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="content" >

          <div id="seoul" defaultSelectedKeys={['1']}>
            <Button type="text" id="button-head" key="1">Seoul</Button>
            <Button type="text" onClick={(e) => {setData(storeSeoul);
            setLat(37.59732049638715);
          setLng(127.0588283395548)}} >맛집공간</Button>

          </div>
          <div id="global" defaultSelectedKeys={['2']}>
            <Button type="text" id="button-head" key="2">Global</Button>
            <Button type="text" onClick={(e) => {setData(storeGlobal);
            setLat(37.336538181222245);
            setLng(127.25253858610613);
            }}>맛집공간</Button>

          </div>

        </div>
        <div className="map-boo">
          <img src={mapboo} alt="숨어 있는 부" />
        </div>
      </div>
      <div className="up-down" />
      <div className="Map-main">
        <div id="KaKaoMap">
          <KaKaoMap lat = {lat} lng = {lng}/>
        </div>
        <div id="Food-list">
          <SearchBar
            placeholder="Search"

            onChange={(e) => searchData(e.target.value)}
            style={{ width: '100 %' }}

          />
          <div className="itemContainer">

            {data.mydata ? data.mydata.map((d, index) => (
              <Card id="aa" {...d} key={index} match = {match}/>
            )) : <h1>null</h1>}
          </div>
        </div>
      </div>

    </div>

  );

};

export default MapContainer;
