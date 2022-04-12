import Pintor from '../../Assets/pintor-slider1.jpg';
import Autos from '../../Assets/autos-slider1.jpg';
import Landscape from '../../Assets/landscape-slider1.png';
import Sketch from '../../Assets/carsketch-slider1.jpg';
import Street6 from '../../Assets/street6-slider.png';
import Street3 from '../../Assets/street3-slider.png';
import Greece from '../../Assets/greco-fuerte-slider.png';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import './carousel.css';

const Carousel2 = () => {
    return (
        <div className="uk-position-relative uk-visible-toggle uk-light slider-container" tabindex="-1" uk-slider="center: true">

            <ul className="uk-slider-items uk-grid uk-grid-match" uk-height-viewport="offset-top: true; offset-bottom: 30">
                <li className="uk-width-3-4">
                    <div className="uk-cover-container">
                        <img src={Pintor} alt="slider" uk-cover/>
                    </div>
                </li>
                <li className="uk-width-3-4">
                    <div className="uk-cover-container">
                        <img src={Landscape} alt="slider" uk-cover/>
                    </div>
                </li>
                <li className="uk-width-3-4">
                    <div className="uk-cover-container">
                        <img src={Sketch} alt="slider" uk-cover/>
                    </div>
                </li>
                <li className="uk-width-3-4">
                    <div className="uk-cover-container">
                        <img src={Autos} alt="slider" uk-cover/>
                    </div>
                </li>
                <li class="uk-width-3-4">
                    <div class="uk-cover-container">
                        <img src={Street3} alt="slider" uk-cover/>
                    </div>
                </li>
                <li class="uk-width-3-4">
                    <div class="uk-cover-container">
                        <img src={Greece} alt="slider" uk-cover/>
                    </div>
                </li>
                <li class="uk-width-3-4">
                    <div class="uk-cover-container">
                        <img src={Street6} alt="slider" uk-cover/>
                    </div>
                </li>
            </ul>

            <a class="uk-position-center-left uk-position-small arrow" href="#" uk-slidenav-previous uk-slider-item="previous">
                <IoIosArrowBack />
            </a>
            <a class="uk-position-center-right uk-position-small arrow" href="#" uk-slidenav-next uk-slider-item="next">
                <IoIosArrowForward />
            </a>

        </div>
    )
}

export default Carousel2;