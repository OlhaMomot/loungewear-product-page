import Slider from "../Swiper/Swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { ProductImages } from "../../images";

export const Benefits = () => {
  return (
    <Slider slides={ProductImages}/>
  )
};
