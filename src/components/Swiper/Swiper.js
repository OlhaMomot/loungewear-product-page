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

            <img src={slide} alt='product-name' className='swiper__image' />
          </SwiperSlide>
        ))}
      </Swiper>

      
      <Swiper
          onClick={setActiveThumb}
          loop={true}
          spaceBetween={10}
          slidesPerView={'auto'}
          modules={[Navigation, Thumbs]}
          className="swiper-thumbs"
        >
          <div className='swiper-thumbs__wrapper'>
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
          </div>

          <span>Product name</span>

        </Swiper>
    </div>
  );
};

export default Slider;
