import React, { useState } from 'react';
import KaKaoMap from './KakaoMap';
import storeSeoul from './store-seoul.json';
import Card from './Card.js';
import SearchBar from './SearchBar.js';
import axios from "axios";
import { Button, Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const MapContainer = () => {
  const [data, setData] = useState(storeSeoul);
  // const searchData = (pattern) => {
  //   if (!pattern) {
  //     setData(storeSeoul);
  //     return;
  //   }

//     const fuse = new Fuse(data, {
//       keys: ["name"],
//     });

//     //const fuse = new Fuse(, options);

//     const result = fuse.search(pattern);


//     //const result = fuse.search(pattern);
//     const matches = [];
//     if (!result.length) {
//       setData([]);
//     } else {
//       result.forEach(({ item }) => {
//         matches.push(item);
//       });
//       setData(matches);

//     }

  


  return (

    <div className="Map">

      <div className="Map-left">
        <div className="navi" >

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
          <div id="seoul">
            <Button type="text" id="button-head">Seoul</Button>
            <Button type="text">맛집공간</Button>
            <Button type="text">주거공간</Button>

          </div>
          <div id="global">
            <Button type="text" id="button-head">Global</Button>
            <Button type="text">맛집공간</Button>
            <Button type="text">주거공간</Button>
          </div>
        </div>
      </div>
      <div className="up-down" />
      <div className="Map-main">
        <div id="KaKaoMap">
          <KaKaoMap>
          </KaKaoMap>
        </div>
        <div className="Map-board">
          <SearchBar
            placeholder="Search"
            onChange={(e) => searchData(e.target.value)}
          />
          <div className="itemContainer">
            {/*data.mydata.map((d) => (

 
          <Card {...d} key={d.name}/>))*/}
            {data.mydata ? data.mydata.map((d, index) => (
              <Card {...d} key={index} />
            )) : <h1>null</h1>}
          </div>
        </div>
      </div>


    </div>







  );

};

export default MapContainer;
