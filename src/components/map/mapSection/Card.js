import React, { useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import {Card} from 'antd';
import {useHistory,withRouter,useLocation } from 'react-router-dom';
import { Button } from 'antd'

const { kakao } = window;

const Rstrn = ( {name,numAddress,roadAddress,lat,long,match}) => {
  //const history = useHistory();

  //const [markerPositions, setMarkerPositions] = useState();
  //const { map } = useSelector((state) => ({ map: state.map }), []);
  const dispatch = useDispatch();
  const [state, setstate] = useState();
  const history = useHistory();
  const location = useLocation();
  const [, setMarkers] = useState([]);


  //const {map} = useSelector(state => state.map,[]);

  //const infor = [image, title, author];
  //let history = useHistory();
  // 변수 초기값
  
 useEffect(() => {
   
  
  // 지도에 마커를 표시하는 함수입니다
  
}, []);
var map = state;
var markers=[];

function displayMarker (){
  
  //hideMarkers(markers);
  
  const container = document.getElementById('map');
  const options = {
    center: new kakao.maps.LatLng(37.59732049638715, 127.05882833955489), // 한국외대 설캠
    level: 3,
  };
  const map = new kakao.maps.Map(container, options);
  setstate(map);
    
    console.log(map);  
  
  console.log(map.getLevel())
  if (map.getLevel() >= 3) {
      map.setLevel(3);
      map.panTo(new kakao.maps.LatLng(lat + 0.0010, long));
  } else if (map.getLevel() === 2) {
      map.panTo(new kakao.maps.LatLng(lat + 0.0005, long));
  } else {
      map.panTo(new kakao.maps.LatLng(lat + 0.0003, long));
  }
      
  var customOverlay1 = new kakao.maps.CustomOverlay({
      map: map,
      position: new kakao.maps.LatLng(lat, long),
      content: content,
      yAnchor: 1
    });

    customOverlay1.setMap(null);

    var content = document.createElement("div");
    content.className = "overlaybox";
    var content1 = document.createElement("h1");
    content1.appendChild(document.createTextNode(name));
    content.appendChild(content1);

    var buttonContainer = document.createElement("div");
    buttonContainer.className = "popup-buttons";

    var closeBtn = document.createElement("button");
    closeBtn.className = "popup-button";
    closeBtn.appendChild(document.createTextNode("취소"));
    closeBtn.onclick = function () {
      customOverlay1.setMap(null);
    };
    React.createElement('div', null,  'hello world')
    var selectBtn = document.createElement("button");

    var temp_link = document.createElement("a");
    temp_link.className = "popup-button";
    temp_link.target='_blank';
    temp_link.appendChild(document.createTextNode("이동"));
    selectBtn.appendChild(temp_link);
    selectBtn.onclick = function () {
      history.push( {
        pathname: `${match.path}/info/${name}`,
        state: {   name : name,
        numAddress : numAddress,
        roadAddress : roadAddress,
        }
        
    }
      );
    // history.pushState(query, '', `${match.path}/info/${name}`);  
      
    };
    buttonContainer.appendChild(closeBtn);
    buttonContainer.appendChild(selectBtn);

    content.appendChild(buttonContainer);

    customOverlay1.setContent(content);

  
   // 커스텀 오버레이를 생성합니다
   /*
   var customOverlay = new kakao.maps.CustomOverlay({
      map: null,
      position: new kakao.maps.LatLng(lat, lng),
      content: content,
      yAnchor: 1
    });

*/
 
    // 마커 이미지의 이미지 크기 입니다
    //var imageSize = new kakao.maps.Size(30, 35);
    // 마커 이미지를 생성합니다    
    //var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      //map: map, // 마커를 표시할 지도
      position: new kakao.maps.LatLng(lat, long), // 마커를 표시할 위치
      title: name, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      //image: markerImage // 마커 이미지 
    });
    
     


  // 마커에 클릭이벤트를 등록합니다
  kakao.maps.event.addListener(marker, "click", function () {
    // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
    console.log(map.getLevel())
      if (map.getLevel() >= 3) {
          map.setLevel(3);
          map.panTo(new kakao.maps.LatLng(lat + 0.0010, long));
      } else if (map.getLevel() === 2) {
          map.panTo(new kakao.maps.LatLng(lat + 0.0005, long));
      } else {
          map.panTo(new kakao.maps.LatLng(lat + 0.0003, long));
      }
      customOverlay1.setMap(map);
  });
  
    
  markers.push(marker);   
  marker.setMap(map);
};

function hideMarkers(markers) {
  markers.forEach(marker => marker.setMap(null)); 
}


const style = {
  height: '100px',
  width: '100px',
};



return (
  /* jshint ignore:start */
<>
<div>
  {
    <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>{name}</p>
      <p>{numAddress}</p>
      <p>{roadAddress}</p>
      <button onClick={displayMarker}>
          지도에서 확인하기
        </button>
  </Card>}
    </div>
    <div id="map" style={style}></div>


  </>
  /* jshint ignore:end */
  );
};
export default withRouter(Rstrn);
