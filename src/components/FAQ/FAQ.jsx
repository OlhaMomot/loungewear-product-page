import { useState } from 'react';
import './FAQ.scss';
import Button from '../UI/Button/Button';
import { Stars } from '../UI/Stars/Stars';

export const FAQ = () => {
  const [clicked, setClicked] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  return (
    <section className='faq'>
      <h3 className='faq__title title'>frequently asked questions.</h3>

      <hr />

      <div className="faq__question">
        <div className='question'>

          <p className='question__title'>lorem ipsum dolor sit amet</p>

          <div
            onClick={() => setClicked(prev => ({ ...prev, 1: !prev[1] }))}
            className={`question__button ${clicked[1] ? 'open' : ''}`}
          >
            {clicked[1] ? '-' : '+'}
          </div>
        </div>

        {clicked[1] &&
          (<p className='faq__question--answer'>
            Our fabrics and garments are made in Portugal.
            We build strong relationships with our immediate suppliers and visit as often as possible.
          </p>)
        }
      </div>

      <hr />
      <div className="faq__question">

        <div className='question'>

          <p className='question__title'>lorem ipsum dolor sit amet</p>

          <div
            onClick={() => {
              setClicked(prev => ({ ...prev, 2: !clicked[2] }))
            }}
            className='question__button'
          >
            {clicked[2] ? '-' : '+'}
          </div>
        </div>

        {clicked[2] &&
          (<p className='faq__question--answer'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, sint eaque?
            Possimus, cumque a alias facilis cum ipsum? Sit, reiciendis iusto! Officia nesciunt reprehenderit
            laudantium corporis minima sed cum animi.
          </p>)
        }

      </div>

      <hr />
      <div className="faq__question">

        <div className='question'>

          <p className='question__title'>lorem ipsum dolor sit amet</p>

          <div
            onClick={() => setClicked(prev => ({ ...prev, 3: !clicked[3] }))}
            className='question__button'
          >
            {clicked[3] ? '-' : '+'}
          </div>
        </div>

        {clicked[3] &&
          (
            <p className='faq__question--answer'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Possimus, cumque a alias facilis cum ipsum? Sit, reiciendis iusto! Officia nesciunt reprehenderit
              laudantium corporis minima sed cum animi.
            </p>
          )}
      </div>

      <hr />
      <div className="faq__question">

        <div className='question'>

          <p className='question__title'>lorem ipsum dolor sit amet</p>

          <div
            onClick={() => setClicked(prev => ({ ...prev, 4: !clicked }))}
            className='question__button'
          >
            {clicked[4] ? '-' : '+'}
          </div>
        </div>

        {clicked[4] &&
          (
            <p className='faq__question--answer'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, sint eaque?
              Possimus, cumque a alias facilis cum ipsum? Sit, reiciendis iusto! Officia nesciunt reprehenderit
              laudantium corporis minima sed cum animi.
            </p>
          )}
      </div>

      <hr />
      <div className="faq__question">

        <div className='question'>

          <p className='question__title'>lorem ipsum dolor sit amet</p>

          <div
            onClick={() => setClicked(prev => ({ ...prev, 5: !clicked }))}
            className='question__button'
          >
            {clicked[5] ? '-' : '+'}
          </div>
        </div>

        {clicked[5] &&
          (
            <p className='faq__question--answer'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, sint eaque?
              Possimus, cumque a alias facilis cum ipsum? Sit, reiciendis iusto! Officia nesciunt reprehenderit
              laudantium corporis minima sed cum animi.
            </p>
          )}
      </div>

      <hr />
      <div className="faq__question">

        <div className='question'>

          <p className='question__title'>lorem ipsum dolor sit amet</p>

          <div
            onClick={() => setClicked(prev => ({ ...prev, 6: !clicked }))}
            className='question__button'
          >
            {clicked[6] ? '-' : '+'}
          </div>
        </div>

        {clicked[6] &&
          (
            <p className='faq__question--answer'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, sint eaque?
              Possimus, cumque a alias facilis cum ipsum?
            </p>
          )}
      </div>

      <hr />

      <Button />
      <Stars />
    </section >
  );
};
