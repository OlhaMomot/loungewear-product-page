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

      <div className="hero__container">
        <img src={logo} alt='byteex-logo' className='hero__logo' />

        <h1 className='hero__title title content-column'>Don't apologize for being comfortable</h1>

        <div className='hero__gallery gallery'>

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

        <div className='hero__about about content-column'>

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
      </div>

      <div className='hero__gallery gallery gallery--deskTop'>

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
    </section>
  )
};
