import React, { useState } from 'react';
import KaKaoMap from './KakaoMap';
import storeSeoul from './store-seoul.json';
import Fuse from 'fuse.js';
import Card from './Card.js';
import SearchBar from './SearchBar.js';
import axios from "axios";

const MapContainer = () => {
  const [data, setData] = useState(storeSeoul);
  console.log(data);
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
      } );  
      setData(matches);   
    
    }
    }
    /*

    const style1 = {
      height: "100px", 
      weight:"100px", 
      paddingLeft: "10px", 
      paddingRight: "10px", 
      float:'right', 
      textAlign: 'center',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'

    }
    const style2 = {
      height:"600px",
    width:"800px",
    margin:0,
    display: 'inline-block',
    }
    */
  //const { map } = useSelector(state => ({ map: state.map}), []);
  const style={
    weight:"100px",
    height:'50px',
    margin:'0 auto 0 auto',
    position:'relative', 
    paddingTop:'90px',
    paddingRight:'0px',
    paddingBottom:'0px',
    paddingLeft:'300px',
  }
  //{height:"80px" ,width:"80px"}
  /* {
weight:"200px",
    height:'600px',
    float:'right',
    paddingRight:"10%",
    paddingTop:"5%",
    
  }*/
  //{width: "400px", margin: "0 auto", paddingTop:"150px"}

  const style1 = {
    paddingTop:'30px',
  }
  
  return (
     /*jshint ignore:start */
    <>
      
      <SearchBar
        placeholder="Search"
        onChange={(e) => searchData(e.target.value)}
       />
       <div style={{
weight:"200px",
    height:'600px',
    float:'right',
    paddingRight:"10%",
    paddingTop:"5%",
    
  }}>
      <KaKaoMap>
      </KaKaoMap>
      </div>
      
     
<div style={{height:"80px" ,width:"80px"}}>
{/*data.mydata.map((d) => (
          <Card {...d} key={d.name}/>))*/}
        {data.mydata ?  data.mydata.map((d,index) => (
          <Card {...d} key={index} />
        )) : <h1>null</h1> }
      </div>
      
    </>
    
     /* jshint ignore:end */
  );
  
};

export default MapContainer;