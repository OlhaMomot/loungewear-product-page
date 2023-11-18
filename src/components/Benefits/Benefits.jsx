import Slider from "../Swiper/Swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './Benefits.scss';
import { ProductImages } from "../../images";
import Button from '../UI/Button/Button';
import { Stars } from "../UI/Stars/Stars";

export const Benefits = () => {
  return (
    <div className="benefits">

      <div className="benefits__brands brands">

        <span className="brands__line">as seen in</span>

        <div className="brands__list">

          <span className="brands__list--item1" />
          <span className="brands__list--item2" />
          <span className="brands__list--item3" />
          <span className="brands__list--item4" />
          <span className="brands__list--item5" />
        </div>

        <div className="swiper__container">

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              el: '.swiper-custom-pagination',
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper brands__swiper"
          >
            <SwiperSlide><span className="brands__list--item1" /></SwiperSlide>
            <SwiperSlide><span className="brands__list--item2" /></SwiperSlide>
            <SwiperSlide><span className="brands__list--item3" /></SwiperSlide>
            <SwiperSlide><span className="brands__list--item4" /></SwiperSlide>
            <SwiperSlide><span className="brands__list--item5" /></SwiperSlide>
          </Swiper>

          <div className="swiper-custom-pagination" />
        </div>
      </div>

      <h2 className="title">Loungewear you can be proud of.</h2>

      <div className="benefits__item">

        <span className="benefits__icon"></span>

        <div className="benefits__text">
          <h3>Ethically sourced.</h3>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Odit sequi porro quaerat. Facere dolores hic harum voluptatibus perspiciatis cumque.
          </p>
        </div>
      </div>

      <div className="benefits__item">

        <span className="benefits__icon"></span>

        <div className="benefits__text">
          <h3>Responsibly made.</h3>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Odit sequi porro quaerat. Facere dolores hic harum voluptatibus perspiciatis cumque.
          </p>
        </div>
      </div>

      <div className="benefits__item">

        <span className="benefits__icon"></span>

        <div className="benefits__text">
          <h3>Made for living in.</h3>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Odit sequi porro quaerat. Facere dolores hic harum voluptatibus perspiciatis cumque.
          </p>
        </div>
      </div>

      <div className="benefits__item">

        <span className="benefits__icon"></span>

        <div className="benefits__text">
          <h3>Unimaginably comfortable.</h3>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Odit sequi porro quaerat. Facere dolores hic harum voluptatibus perspiciatis cumque.
          </p>
        </div>
      </div>

      <Slider slides={ProductImages} />
      <Button />
      <Stars />
    </div >
  )
};
