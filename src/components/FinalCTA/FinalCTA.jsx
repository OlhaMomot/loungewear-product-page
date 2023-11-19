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

      <span className="final__text"></span>

      <div className="final__photos gallery">

        <div className='gallery--right'>
          <img src={product1} alt='girl-in-pajamas' className='pic' />
        </div>

        <div className='gallery--central'>
          <img src={product2} alt='girl-in-pajamas' className='pic' />
        </div>

        <div className='gallery--left'>
          <img src={product3} alt='girl-in-pajamas' className='pic' />
        </div>

      </div>

      <div className="final__bottom">

        <Button />
        <Stars />
      </div>
    </section>
  );
};
