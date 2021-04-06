import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const { kakao } = window;

const KakaoMap = () => {
  const dispatcher = useDispatch();

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.59732049638715, 127.05882833955489), // 한국외대 설캠
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);



  }, []);

  const style={
    height:"150%",
    width:"100%"
  }

  return <div id="map" style={style}> </div>;
}

export default KakaoMap;


/*

// 장소 검색 객체를 생성합니다
var ps = new kakao.maps.services.Places();

// 키워드로 장소를 검색합니다
ps.keywordSearch(searchPlace, placesSearchCB);

// 키워드 검색 완료 시 호출되는 콜백함수 입니다
function placesSearchCB (data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        var bounds = new kakao.maps.LatLngBounds();

        for (var i=0; i<data.length; i++) {
            displayMarker(data[i]);
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
    }
}
*/

