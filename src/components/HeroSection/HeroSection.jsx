import Button from '../Button/Button';
import './HeroSection.scss';

export const HeroSection = () => {
  return (
    <div className='hero'>

      <img src='/logo.png' alt='byteex-logo'/>

      <p className='hero__title'>Don't apologize for being comfortable</p>

      <div className='hero__gallery gallery'>

        <span className='gallery__photo'></span>
        <span className='gallery__photo--central'></span>
        <span className='gallery__photo'></span>
      </div>

      <div className='hero__about'>
        <div className='hero__about--mobile'>
          <span className='about__day-nigth'></span>
          <p>Beautiful, comfortable loungewear for day or night.</p>

          <span className='about__day-packaging'></span>
          <p>No wasteful extras, like tags or plastic packaging.</p>

          <span className='about__fabric'></span>
          <p>Our signature fabric is incredibly comfortable — unlike anything you’ve ever felt.</p>
        </div>

        <div className='hero__about--desktop'>
          <span className='about__day-nigth'></span>
          <p></p>

          <span className='about__day-packaging'></span>
          <p></p>

          <span className='about__fabric'></span>
          <p></p>
        </div>

        <Button />
      </div>
    </div>
  )
};
