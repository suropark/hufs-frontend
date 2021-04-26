import img1 from '../../banner/banner1.png';
import img2 from '../../banner/banner2.png';
import img3 from '../../banner/banner3.png';
import img4 from '../../banner/banner4.png';
import test from '../../banner/test1.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';
import './Slide.css';

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
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
  }

  return (
    <Slider {...footerSetting}>
      <ul class="hufs_link">
        <li>
          <a href="http://www.hufs.ac.kr/" target="_blank"><img src={test} alt="error" /></a>
          <div class="info">
            <span class="name">한국외대 공식 홈페이지</span>
          </div>

        </li>
        <li>
          <a href="https://eclass.hufs.ac.kr/" target="_blank"><img src={test} alt="error" /></a>
          <div class="info">
            <span class="name">한국외대 E-class</span>
          </div>
        </li>
        <li>
          <a href="https://www.facebook.com/hufsstudent/" target="_blank"><img src={test} alt="error" /></a>
          <div class="info">
            <span class="name">서울캠퍼스 총학생회</span>
            <span class="info2">54대 총학생회 새벽으로 부터</span>
          </div>
        </li>
        <li>
          <a href="https://www.facebook.com/hufsglobal42th" target="_blank"><img src={test} alt="error" /></a>
          <div class="info">
            <span class="name">한국외대 공식 홈페이지</span>
            <span class="info2">42대 총학생회 On</span>
          </div>
        </li>
        <li>
          <a href="https://www.facebook.com/hufspr" target="_blank"><img src={test} alt="error" /></a>
          <div class="info">
            <span class="name">한국외대 공식 Facebook</span>
          </div>
        </li>
        <li>
          <a href="https://www.youtube.com/user/HUFS1954" target="_blank"><img src={test} alt="error" /></a>
          <div class="info">
            <span class="name">한국외대 공식 Youtube</span>
          </div>
        </li>
        <li>
          <a href="https://www.instagram.com/hufstagram/" target="_blank"><img src={test} alt="error" /></a>
          <div class="info">
            <span class="name">한국외대 공식 Instagram</span>
          </div>
        </li>
      </ul>
    </Slider>
  );
}