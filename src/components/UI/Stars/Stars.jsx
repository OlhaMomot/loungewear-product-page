import stars from '../../../images/stars.png';
import './Stars.scss';

export const Stars = () => {
  return (
  <div className="benefits__review review">
    <img src={stars} alt="stars" className="rewiew__stars" />
    <span className="review__text">Over 500+ 5 Star Reviews Online</span>
  </div>
  );
};