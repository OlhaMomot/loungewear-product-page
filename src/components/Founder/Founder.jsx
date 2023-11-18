import './Founder.scss';
import product1 from '../../images/product-picture-1.png';
import product2 from '../../images/product-picture-2.png';
import product3 from '../../images/product-picture-4.png';

export const Founder = () => {
  return (
    <section className="founder">

      <h3 className="founder__title title">Be your best self.</h3>

      <div className='founder__photos photos'>

        <img src={product1} alt='girl-in-pajamas' className='photos--right' />
        <img src={product2} alt='girl-in-pajamas' className='photos--central' />
        <img src={product3} alt='girl-in-pajamas' className='photos--left' />
      </div>

      <article className='founder__text'>

        <p>
          Hi! My name’s [Insert Name], and I founded [Insert] in ____.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.
        </p>

        <p>
          Fusce non nibh luctus,
          dignissim risus quis, bibendum dolor. Donec placerat volutpat ligula, ac consectetur felis varius non. Aliquam a nunc rutrum,
          porttitor dolor eu, pellentesque est. Vivamus id arcu congue, faucibus libero nec, placerat ligula.
        </p>

        <p>
          Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.
        </p>

        <p>
          Fusce non ante velit.
          Sed auctor odio eu semper molestie. Nam mattis, sapien eget lobortis fringilla, eros ipsum tristique tellus, ac convallis urna
          massa at nibh.
        </p>

        <p>
          Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod leo aliquam ut. Vivamus in felis eu lacus
          feugiat aliquam nec in sapien.
        </p>

        <p>
          Cras mattis varius mollis.
        </p>
      </article>
    </section>
  );
};
