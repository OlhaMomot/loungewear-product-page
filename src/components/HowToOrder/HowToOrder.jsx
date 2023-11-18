import './HowToOrder.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Button from '../Button/Button';
import stars from '../../images/stars.png';

export const HowToOrder = () => {
  return (
    <div className='order'>
      <h3 className='order__title title'>Comfort made easy</h3>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className='order__box'>

            <span className='order__icon'></span>

            <h4 className='order__box--title'>You save.</h4>

            <p className='order__box--text'>Browse our store and find something you love.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='order__box'>

            <span className='order__icon'></span>

            <h4 className='order__box--title'>We ship.</h4>

            <p>We ship your items within 1-2 days of receiving your order.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='order__box'>

            <span className='order__icon'></span>

            <h4 className='order__box--title'>You enjoy!</h4>

            <p>Wear hernest around the house, out on the town, or in bed.</p>
          </div>
        </SwiperSlide>
      </Swiper>

      <Button />

      <div className="benefits__review review">
        <img src={stars} alt="stars" className="rewiew__stars"/>
        <span className="review__text">Over 500+ 5 Star Reviews Online</span>
      </div>
    </div>
  );
};
