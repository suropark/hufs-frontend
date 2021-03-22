import { useSelector } from "react-redux";
const { kakao } = window

var kakaoMap = {};

const useGeolocation = () => {

  const { map } = useSelector(state => ({ map: state.mapState.map }), []);

  kakaoMap = map;
  const getGeo = () => {
    //kakaoMap.center = new kakao.maps.LatLng(37.59732049638715, 127.05882833955489); // 외대 서울캠퍼스 좌표
    // kakaoMap.panto(new kakao.maps.LatLng(37.33658613892205, 127.26550942605273)); 외대 글로벌캠퍼스 좌표

  }
  return { getGeo };
}

export default useGeolocation;