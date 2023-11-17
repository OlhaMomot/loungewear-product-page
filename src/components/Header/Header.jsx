import './Header.scss';

export const Header = () => {
  return (
    <div className='header'>
      <p className='header__description'>
        CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)
      </p>

      <span className='header__line'>|</span>

      <p className='header__shipping'>
        {'FREE SHIPPING on orders > $200'}
      </p>

      <span className='header__line'>|</span>

      <p className='header__description'>
        easy 45 day return window.
      </p>
    </div>
  )
}
