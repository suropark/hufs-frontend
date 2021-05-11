import img1 from '../../image/banner/banner1.png';
import img2 from '../../image/banner/banner2.png';
import img3 from '../../image/banner/banner3.png';
import img4 from '../../image/banner/banner4.png';
// 배너
import foo1 from '../../image/footer-icon/hufspace-insta.png';
import foo2 from '../../image/footer-icon/hufstagram.png';
import foo3 from '../../image/footer-icon/Hufs-face.png';
import foo4 from '../../image/footer-icon/Hufs-you.png';
import foo5 from '../../image/footer-icon/forHufs.png';
import foo6 from '../../image/footer-icon/On.png';
// 푸터


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';


//npm install react-slick --save
//npm install slick-carousel  설치 필요
function Slide() {
  const settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    width: '100%',
    height: '100%',
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={img1} />
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img3} />
      </div>
      <div>
        <img src={img4} />
      </div>
    </Slider>
  );
}

export default Slide;

export function Slide2() {
  const footerSetting = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
  }

  return (
    <Slider {...footerSetting}>

      <div >
        <a href="https://www.instagram.com/hufspace_official/" target="_blank"><img src={foo1} alt="error" /></a>
        <div class="info">
          <div class="name">HUFSpace</div>
          <span class="info2">HUFSpace 공식 인스타그램</span>
        </div>
      </div>
      <div>
        <a href="https://www.instagram.com/hufstagram/" target="_blank"><img src={foo2} alt="error" /></a>
        <div class="info">
          <div class="name">Hufstagram</div>
          <span class="info2">한국외대 공식 인스타그램</span>
        </div>
      </div>
      <div>
        <a href="https://www.facebook.com/hufspr/" target="_blank"><img src={foo3} alt="error" /></a>
        <div class="info">
          <div class="name">HUFS 페이스북</div>
          <span class="info2">한국외대 공식 페이스북</span>
        </div>
      </div>
      <div>
        <a href="https://www.youtube.com/user/HUFS1954/" target="_blank"><img src={foo4} alt="error" /></a>
        <div class="info">
          <div class="name">HUFS 유튜브</div>
          <span class="info2">한국외대 공식 유튜브</span>
        </div>
      </div>
      <div>
        <a href="https://www.instagram.com/hufsstudent/" target="_blank"><img src={foo5} alt="error" /></a>
        <div class="info">
          <div class="name">서울캠퍼스 총학생회</div>
          <span class="info2">제55대 총학생회 '외대에게'</span>
        </div>
      </div>
      <div>
        <a href="https://www.instagram.com/hufs_on/" target="_blank"><img src={foo6} alt="error" /></a>
        <div class="info">
          <div class="name">글로벌캠퍼스 총학생회</div>
          <span class="info2">제42대 총학생회 'ON'</span>
        </div>
      </div>
    </Slider >
  );
}