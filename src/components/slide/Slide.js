import img1 from '../../banner/banner1.png';
import img2 from '../../banner/banner2.png';
import img3 from '../../banner/banner3.png';
import img4 from '../../banner/banner4.png';

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
