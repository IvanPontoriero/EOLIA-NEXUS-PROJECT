import { RiArrowDownSFill } from 'react-icons/ri';
import Members from './Members';
import WeAre from './WeAre';

const AboutUs = () => {
    return(
        <div className='about-us' id='about-us'>
            <div className='transition'></div>
            <h1 className='au-title'>ABOUT US</h1>
            <section className='au-section'>
                <div className='text-bg'>
                    <p class='au-text'>
                        .a DAO financed with NFTs that seeks 
                        to venture into web 3.0 and develop 
                        businesses in the flesh and blood reality.
                    </p>
                    <Members />
                </div>
            </section>
            <span>
                <div className='middle-transition-bottom'></div>
                <div className='middle-transition-top'></div>
            </span>
            <WeAre />
        </div>
    )
};

export default AboutUs;