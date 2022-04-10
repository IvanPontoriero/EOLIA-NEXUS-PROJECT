import Pintor from '../../Assets/pintor-slider1.jpg';
import Autos from '../../Assets/autos-slider1.jpg';
import Landscape from '../../Assets/landscape-slider1.png';
import Sketch from '../../Assets/carsketch-slider1.jpg';
import Iron from '../../Assets/iron-slider.png'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import './carousel.css';

const Carousel2 = () => {
    return (
        <div class="uk-position-relative uk-visible-toggle uk-light slider-container" tabindex="-1" uk-slider="center: true">

            <ul class="uk-slider-items uk-grid uk-grid-match" uk-height-viewport="offset-top: true; offset-bottom: 30">
                <li class="uk-width-4-4">
                    <div class="uk-cover-container">
                        <img src={Pintor} alt="" uk-cover/>
                    </div>
                </li>
                <li class="uk-width-4-4">
                    <div class="uk-cover-container">
                        <img src={Landscape} alt="" uk-cover/>
                    </div>
                </li>
                {/* <li class="uk-width-3-4">
                    <div class="uk-cover-container">
                        <img src={Iron} alt="" uk-cover/>
                    </div>
                </li> */}
                <li class="uk-width-4-4">
                    <div class="uk-cover-container">
                        <img src={Sketch} alt="" uk-cover/>
                    </div>
                </li>
                <li class="uk-width-4-4">
                    <div class="uk-cover-container">
                        <img src={Autos} alt="" uk-cover/>
                    </div>
                </li>
            </ul>

            <a class="uk-position-center-left uk-position-small arrow" href="#" uk-slidenav-previous uk-slider-item="previous"><IoIosArrowBack /></a>
            <a class="uk-position-center-right uk-position-small arrow" href="#" uk-slidenav-next uk-slider-item="next"><IoIosArrowForward /></a>

        </div>
    )
}

export default Carousel2;