import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState } from 'react';
import './Swiper.scss';
import { Navigation, Thumbs } from 'swiper/modules';

export const Slider = ({ slides }) => {
  const [activeThumb, setActiveThumb] = useState();

  return (
    <div className="slider-container">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{ swiper: activeThumb }}
        className="swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>

            <img src={slide} alt='product-name' />

            <span>Product name</span>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onClick={setActiveThumb}
        loop={true}
        spaceBetween={10}
        slidesPerView={`${slides.length}`}
        modules={[ Navigation, Thumbs]}
        className="swiper-thumbs"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index + 'thumb'}>

            <div className='swiper-thumbs__wrapper'>

              <img
                src={slide}
                alt='product-name'
                className='swiper-thumbs__image'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
