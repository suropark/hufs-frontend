import React, { useState } from 'react';
import KaKaoMap from './KakaoMap';
import storeSeoul from './store-seoul.json';
import Fuse from 'fuse.js';
import Card from './Card.js';
import SearchBar from './SearchBar.js';
const MapContainer = () => {
  const [data, setData] = useState(storeSeoul);
  console.log(data)
  const searchData = (pattern) => {
    if (!pattern) {
      setData(storeSeoul);
      return;
    }

    const fuse = new Fuse(data, {
      keys: ["name"],
    });

    //const fuse = new Fuse(, options);

    const result = fuse.search(pattern);


    //const result = fuse.search(pattern);
    const matches = [];
    if (!result.length) {
      setData([]);
    } else {
      result.forEach(({ item }) => {
        matches.push(item);
      });
      setData(matches);

    }
  }
  //const { map } = useSelector(state => ({ map: state.map}), []);

  return (
    /*jshint ignore:start */
    <div className="Map">
      {/* style={{ height: "100px", weight:"100px", paddingLeft: "10px", paddingRight: "10px", float:'right' }} */}
      <div className="Map-left">
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
    /* jshint ignore:end */
  );

};

export default MapContainer;