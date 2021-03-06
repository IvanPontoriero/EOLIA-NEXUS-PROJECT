import RobotBug from '../../Assets/robot-bug.png';
import Members from './Members';
import Lore from './Lore';
import './aboutus.css';

const AboutUs = () => {
    return(
        <div className='about-us' id='about-us'>
            <div className='transition'></div>
            <div className='title-container'>
                <h1 className='au-title'>THE EOLIA NEXUS PROJECT</h1>
            </div>
            <section className='au-section'>
                <div className='text-bg'>
                    <p class='au-text'>
                        An initiative to create a legitimate use case for NFTs, 
                        help improve the digital art scene and its relation with the crypto world, 
                        build a community, and help others build experiences on VR.
                    </p>
                </div>
                <Members />
                <div className='robotbug-container'>
                    <img src={ RobotBug } alt='robot bug ilustration' className='robotbug'/>    
                </div>
                {/* <div className='purplecar-container'>
                    <img src={ PurpleCar } alt='purple car ilustration' className='purplecar'/>    
                </div> */}
            </section>
            <span>
                <div className='middle-transition-bottom'></div>
                <div className='middle-transition-top'></div>
            </span>
            <Lore />
        </div>
    )
};

export default AboutUs;