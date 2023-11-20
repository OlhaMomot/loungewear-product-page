import './FinalCTA.scss';
import Button from '../UI/Button/Button';
import { Stars } from "../UI/Stars/Stars";
import product1 from '../../images/product-picture-6.png';
import product2 from '../../images/product-picture-5.png';
import product3 from '../../images/product-picture-1.png';

export const FinalCTA = () => {
  return (
    <section className="final">
      <h3 className="final__title title">Find something you love.</h3>

      <span className="final__title--text">Click below to browse our collection!</span>

      <div className="final__photos gallery gallery--deskTop">

        <div className='gallery--right'>
          <img src={product1} alt='girl-in-pajamas' className='picture' />
        </div>

        <div className='gallery--central'>
          <img src={product2} alt='girl-in-pajamas' className='picture' />
        </div>

        <div className='gallery--left'>
          <img src={product3} alt='girl-in-pajamas' className='picture' />
        </div>

      </div>

      <div className="final__bottom">

        <div className="final__button">
          <Button />
          <Stars />

          <div className="final__info">

            <div className="final__info--item">

              <div className='info__item--icon'>
                <span className="info__icon icon-lorry-gray"></span>
              </div>

              <div className="final__text">FREE Shipping on Orders over $200</div>

              <hr />
            </div>

            <div className="final__info--item">

              <div className='info__item--icon'>
                <span className="info__icon icon-guard"></span>
              </div>

              <span className="final__text">Over 500+ 5 Star Reviews Online</span>

              <hr />
            </div>

            <div className="final__info--item">

              <div className='info__item--icon'>
                <span className="info__icon icon-cart-gray"></span>
              </div>

              <span className="final__text">Made ethically and responsibly.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
