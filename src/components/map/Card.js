import React, { useEffect} from "react";
import { useSelector } from "react-redux";
import {BrowserRouter as useHistory} from "react-router-dom";


const { kakao } = window;

const Card = ({ image, title, author, url, lat, lng}) => {
  const { map } = useSelector((state) => ({ map: state.mapState.map }), []);
  const infor = [image,title,author];
 let history = useHistory(); 
  

  // 변수 초기값
  useEffect(() => {
  }, [map]);

  
  var markers=[];
  
  // 지도에 마커를 표시하는 함수입니다
  function displayMarker() {
    console.log(map.getLevel())
    if (map.getLevel() >= 3) {
        map.setLevel(3);
        map.panTo(new kakao.maps.LatLng(lat + 0.0010, lng));
    } else if (map.getLevel() === 2) {
        map.panTo(new kakao.maps.LatLng(lat + 0.0005, lng));
    } else {
        map.panTo(new kakao.maps.LatLng(lat + 0.0003, lng));
    }
        
    var customOverlay1 = new kakao.maps.CustomOverlay({
        map: map,
        position: new kakao.maps.LatLng(lat, lng),
        content: content,
        yAnchor: 1
      });

      customOverlay1.setMap(null);

      var content = document.createElement("div");
      content.className = "overlaybox";
      var content1 = document.createElement("h1");
      content1.appendChild(document.createTextNode(title));
      content.appendChild(content1);

      var buttonContainer = document.createElement("div");
      buttonContainer.className = "popup-buttons";

      var closeBtn = document.createElement("button");
      closeBtn.className = "popup-button";
      closeBtn.appendChild(document.createTextNode("취소"));
      closeBtn.onclick = function () {
        customOverlay1.setMap(null);
      };

      var selectBtn = document.createElement("button");

      var temp_link = document.createElement("a");
      temp_link.className = "popup-button";
      temp_link.target='_blank';
      temp_link.appendChild(document.createTextNode("이동"));
      selectBtn.appendChild(temp_link);
      selectBtn.onclick = function () {
        
      history.push(`/info/${title}`,infor);
      //history.pushState(state, '', `/info/${title}`);
        
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
        position: new kakao.maps.LatLng(lat, lng), // 마커를 표시할 위치
        title: title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        //image: markerImage // 마커 이미지 
      });
      
      marker.setMap(map);
      markers.push(marker); 
      hideMarkers();
      
       

 
    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, "click", function () {
      // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
      console.log(map.getLevel())
        if (map.getLevel() >= 3) {
            map.setLevel(3);
            map.panTo(new kakao.maps.LatLng(lat + 0.0010, lng));
        } else if (map.getLevel() === 2) {
            map.panTo(new kakao.maps.LatLng(lat + 0.0005, lng));
        } else {
            map.panTo(new kakao.maps.LatLng(lat + 0.0003, lng));
        }
        customOverlay1.setMap(map);
    });
  }

  function setMarkers(map) {
      if (markers.length > 1) {

        alert(markers.length);
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
        }         
      }   
}
function hideMarkers() {
    setMarkers(null);    
}

  return (
    <div className="CardWrapper">
      <div className="ColImg">
        <img className="Img" src={image} alt={title} />
      </div>
      <div className="ColDetail">
        <div className="Header">
          <div className="BookTitle">{title}</div>
        </div>
        <div className="Description">{author}</div>
        <a className="Link" href={url}>
          Learn more
        </a>
        <button onClick={displayMarker}>
          지도에서 확인하기
        </button>
      </div>
    </div>
  );
};

export default Card;
