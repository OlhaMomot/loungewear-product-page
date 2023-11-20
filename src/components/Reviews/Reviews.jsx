import './Reviews.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Button from '../UI/Button/Button';
import stars from '../../images/stars.png';
import clients from '../../images/clients';

export const Reviews = () => {
  return (
    <section className="reviews">

      <h3 className='reviews__title title'>What are our fans saying?</h3>

      <p className='reviews__about'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque.
        In eget ipsum et felis finibus consequat. Fusce non nibh luctus.
      </p>

      <div className='reviews__gallery'>
        {clients.map((client) => {
          return (
            <div className='reviews__photo'>
              <img src={client} alt='client_photo' className='reviews__photo--item' />
            </div>
          );
        })}
      </div>

      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper reviews__swiper"
      >
        <SwiperSlide>
          <div className='reviews__comment comment'>

            <div className='comment__author'>

              <span className='comment__picture'></span>

              <div className='comment__stars--container'>

                <img src={stars} alt='stars' className='comment__stars' />

                <span className='comment__name'>Jane, S.</span>
              </div>
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

              <div className='comment__stars--container'>

                <img src={stars} alt='stars' className='comment__stars' />

                <span className='comment__name'>Jane, S.</span>
              </div>
            </div>

            <p className='comment__text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='reviews__comment comment'>

            <div className='comment__author'>

              <span className='comment__picture'></span>

              <div className='comment__stars--container'>

                <img src={stars} alt='stars' className='comment__stars' />

                <span className='comment__name'>Jane, S.</span>
              </div>
            </div>

            <p className='comment__text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sed sollicitudin dolor, non sodales justo.
              Aenean eget aliquet mi.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

      <Button />

    </section>
  );
};
