import Button from '../UI/Button/Button';
import './HeroSection.scss';
import '../../images/icomoon/style.css';
import logo from '../../images/logo.png';
import product1 from '../../images/product-picture-1.png';
import product2 from '../../images/product-picture-2.png';
import product3 from '../../images/product-picture-3.png';

export const HeroSection = () => {
  return (
    <section className='hero'>

      <img src={logo} alt='byteex-logo' className='hero__logo' />

      <p className='hero__title title'>Don't apologize for being comfortable</p>

      <div className='hero__gallery gallery'>

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

      <div className='hero__about about'>

        <div className="about__section">

          <div className='about__icon'>
            <span className='icon-day-night'></span>
          </div>

          <p>Beautiful, comfortable loungewear for day or night.</p>
        </div>

        <div className="about__section">

          <div className='about__icon'>
            <span className='icon-cart'></span>
          </div>

          <p>No wasteful extras, like tags or plastic packaging.</p>
        </div>

        <div className="about__section">

          <div className='about__icon'>
            <span className='icon-wave'></span>
          </div>

          <p>Our signature fabric is incredibly comfortable — unlike anything you’ve ever felt.</p>
        </div>
      </div>

      <Button />
    </section>
  )
};
