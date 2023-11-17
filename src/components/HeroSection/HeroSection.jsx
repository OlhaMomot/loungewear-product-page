import Button from '../Button/Button';
import './HeroSection.scss';
import logo from '../../images/logo.png';
import product1 from '../../images/product-picture-1.png';
import product2 from '../../images/product-picture-2.png';
import product3 from '../../images/product-picture-3.png';

export const HeroSection = () => {
  return (
    <div className='hero'>

      <img src={logo} alt='byteex-logo' className='hero__logo' />

      <p className='hero__title'>Don't apologize for being comfortable</p>

      <div className='hero__gallery gallery'>

        <img src={product1} alt='girl-in-pajamas' className='gallery__photo--right' />
        <img src={product2} alt='girl-in-pajamas' className='gallery__photo--central' />
        <img src={product3} alt='girl-in-pajamas' className='gallery__photo--left' />

      </div>

      <div className='hero__about about'>
        <div className="about__section">
          <span className='about__icon'></span>
          <p>Beautiful, comfortable loungewear for day or night.</p>
        </div>

        <div className="about__section">
          <span className='about__icon'></span>
          <p>No wasteful extras, like tags or plastic packaging.</p>
        </div>

        <div className="about__section">
          <span className='about__icon'></span>
          <p>Our signature fabric is incredibly comfortable — unlike anything you’ve ever felt.</p>
        </div>
      </div>
      <Button />
    </div>
  )
};
