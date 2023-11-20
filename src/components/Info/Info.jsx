import './Info.scss';

export const Info = () => {
  return (
    <section className="info">

      <h3 className="info__title title">Our total green impact</h3>

      <div className="info__container">

        <div className="info__item">

          <div className='info__item--icon'>
            <span className="info__icon icon-CO2"></span>
          </div>

          <span className="info__number">3,927 kg</span>

          <span className="info__text">of CO2 saved</span>

          <hr />
        </div>

        <div className="info__item">

          <div className='info__item--icon'>
            <span className="info__icon icon-drop"></span>
          </div>

          <span className="info__number">2,546,167 days</span>

          <span className="info__text">of drinking water saved</span>

          <hr />
        </div>

        <div className="info__item deskTop">

          <div className='info__item--icon'>
            <span className="info__icon icon-lightning"></span>
          </div>

          <span className="info__number">7,321 kWh</span>

          <span className="info__text">of energy saved</span>
        </div>
      </div>
    </section>
  );
};
