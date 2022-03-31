import Navbar from './Navbar';
import SocialMedia from './SocialMedia';
import Countdown from './Countdown';
import Logo from '../../Assets/logo.png';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-scroll';

const Main = () => {

    return (
        <div className='container' id='home-page'>
            <Navbar />
            <div className='home-content'>
                <div className='main-content'>
                    <SocialMedia />
                    <Countdown  countdownTimestampMs={1649999999999}/>
                    <div className='island-container'>
                        <img src={ Logo } alt='eolia nexus logo' className='island'/>    
                    </div>
                </div>
                <div className='arrow-down'>
                    <Link to="about-us" spy={true} 
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