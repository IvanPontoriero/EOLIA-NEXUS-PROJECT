import Navbar from './Navbar';
import SocialMedia from './SocialMedia';
import Countdown from './Countdown';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-scroll';

const Main = () => {

    return (
        <div className='container' id='home-page'>
            <Navbar />
            <div className='home-content'>
                <div className='main-content'>
                    <SocialMedia />
                    <Countdown  countdownTimestampMs={1646690950000}/>
                </div>
                <div className='arrow-down'>
                    <Link activeClass="active" to="about-us" spy={true} 
                        smooth={true} offset={0} duration={500}>
                            <IoIosArrowDown className='bounce bounce-fill' />
                        </Link>
                </div>
            </div>
            <section>
            </section>    
        </div> 
    )
};

export default Main;