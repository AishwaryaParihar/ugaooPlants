import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000
};

const Carousel = () => {
  return (
    <Slider {...settings}>
      <div>
        <img src="https://via.placeholder.com/600x400" alt="Image 1" />
      </div>
      <div>
        <img src="https://via.placeholder.com/600x400" alt="Image 2" />
      </div>
      <div>
        <img src="https://via.placeholder.com/600x400" alt="Image 3" />
      </div>
    </Slider>
  );
};

export default Carousel;
