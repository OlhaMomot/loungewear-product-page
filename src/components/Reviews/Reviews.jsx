import './Reviews.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Button from '../UI/Button/Button';
import stars from '../../images/stars.png';

export const Reviews = () => {
  return (
    <section className="reviews">

      <h3 className='title'>What are our fans saying?</h3>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque.
        In eget ipsum et felis finibus consequat. Fusce non nibh luctus.
      </p>

      <div className='rewiews__gallery'></div>

      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='reviews__comment comment'>

            <div className='comment__author'>

              <span className='comment__picture'></span>

              <img src={stars} alt='stars' className='comment__stars'/>

              <span className='comment__name'></span>
            </div>

            <p className='comment__text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Pellentesque sed sollicitudin dolor, non sodales justo. 
              Aenean eget aliquet mi.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='reviews__comment comment'>

            <div className='comment__author'>

              <span className='comment__picture'></span>

              <img src={stars} alt='stars' />

              <span className='comment__name'></span>
            </div>

            <p className='comment__text'></p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='reviews__comment comment'>

            <div className='comment__author'>

              <span className='comment__picture'></span>

              <img src={stars} alt='stars' />

              <span className='comment__name'></span>
            </div>

            <p className='comment__text'></p>
          </div>
        </SwiperSlide>
      </Swiper>

      <Button />

    </section>
  );
};
