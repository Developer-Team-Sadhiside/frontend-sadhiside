import React from 'react';
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import '../assets/styles/Carousel.css';
import "swiper/css";
import "swiper/css/pagination";

const Carousel = () => {
  return (
    <div className='mt-5'>
      <Swiper
        height={500}
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={-80}
        grabCursor={true}
        loop={true}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        breakpoints={{
          320:{
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: -30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/images/banner.png" alt="imgbanner1" border="0" className="img-fluid"/></SwiperSlide>
        <SwiperSlide><img src="/images/carousel-1.png" alt="imgbanner1" border="0" className="img-fluid"/></SwiperSlide>
        <SwiperSlide><img src="/images/carousel-2.png" alt="imgbanner1" border="0" className="img-fluid"/></SwiperSlide>
        <SwiperSlide><img src="/images/carousel-3.png" alt="imgbanner1" border="0" className="img-fluid"/></SwiperSlide>
        <SwiperSlide><img src="/images/carousel-4.png" alt="imgbanner1" border="0" className="img-fluid"/></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel
