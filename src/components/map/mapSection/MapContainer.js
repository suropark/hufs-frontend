import React, { useState } from 'react';
import KaKaoMap from './KakaoMap';
import storeSeoul from '../exampleInfo/store-seoul.json';
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
    if (!result.length) {
      setData([]);
    } else {
      result.forEach(({ item }) => {
        matches.push(item);
      } );  
      setData(matches);   
    
      
    }
  };
  //const { map } = useSelector(state => ({ map: state.map}), []);
  
  return (
    /* jshint ignore:start */
    <div>
      <div style={{ height: "50vh", paddingLeft: "10px", paddingRight: "10px" }}>
      <KaKaoMap>
      </KaKaoMap>
      <SearchBar
        placeholder="Search"
        onChange={(e) => searchData(e.target.value)}
       />
<div className="itemContainer">
        {data.mydata ?  data.mydata.map((d) => (
          <Card {...d} key={d.name} />
        )) : <h1>null</h1> }
      </div>
    </div>
    </div>
     /* jshint ignore:end */
  );
};

export default MapContainer;
