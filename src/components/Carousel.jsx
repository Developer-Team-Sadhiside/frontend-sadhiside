import React from 'react';
import Slider from 'react-slick';
import '../assets/styles/Carousel.css';

const Banner = ({ images }) => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <div className='imgslider'>
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id}>
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default Banner;
