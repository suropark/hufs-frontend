import React, { useState } from 'react';
import KaKaoMap from './KakaoMap';
import storeSeoul from './store-seoul.json';
import { useSelector } from "react-redux";
import Fuse from 'fuse.js';
import Card from './Card.js';
import SearchBar from './SearchBar.js';

const MapContainer = () => {
  const [data, setData] = useState(storeSeoul);
  

  const searchData = (pattern) => {
    if (!pattern) {
      setData(storeSeoul);
      return;
    }

    const fuse = new Fuse(data, {
      keys: ["name"]
    });

    const result = fuse.search(pattern);
    const matches = [];
    if (result.length) {
      result.forEach(({ item }) => {
        matches.push(item);
        
      setData(matches);
        
      } );
      
    } else {
      setData(storeSeoul);
    
      
    }
  };
  //const { map } = useSelector(state => ({ map: state.map}), []);
  
  return (
    <div>
      <div style={{ height: "50vh", paddingLeft: "10px", paddingRight: "10px" }}>
      <KaKaoMap>
      </KaKaoMap>
      <SearchBar
        placeholder="Search"
        onChange={(e) => searchData(e.target.value)}
       />
<div className="itemContainer">
        {data.mydata.map((mydata,index) => (
          <Card {...mydata} key={mydata.name} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default MapContainer;
