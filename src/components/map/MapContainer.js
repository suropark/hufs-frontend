import React, { useState } from "react";
import KaKaoMap from "./KakaoMap";
import books from "./books.json";
import Fuse from "fuse.js";
import Card from "./Card.js";
import SearchBar from "./SearchBar.js";

const MapContainer = () => {
  const [data, setData] = useState(books);
  const [inputText, setInputText] = useState("");
  const searchData = (pattern) => {
    if (!pattern) {
      setData(books);
      return;
    }

    const fuse = new Fuse(data, {
      keys: ["title", "author"],
    });

    const result = fuse.search(pattern);
    const matches = [];
    if (!result.length) {
      setData([]);
    } else {
      result.forEach(({item}) => {
        matches.push(item);
      });
      setData(matches);
    }
  };
  const onChange = (e) => {
    setInputText(e.target.value);
  };//
  /*

  const handleCreate = (data) => {
    //place = points;
    setPlace({
      points: points.concat({ id: this.id++, ...data })
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };

  const handleUserInput = (ss) => {
    setInputText(ss);
  }
  */
  
  return <div>
    
    <div style={{ height: "50vh", paddingLeft: "10px", paddingRight: "10px" }}>
      <KaKaoMap >
      </KaKaoMap>
    <SearchBar
        placeholder="Search"
        onChange={(e) => searchData(e.target.value)}
       />

      <div className="Container">
        {data.map((item) => (
          <Card {...item} key={item.title} />
        ))}
    </div>
  </div>
  </div>
}

export default MapContainer;