import { Link } from 'react-router-dom'
import './learnmore.css';

const LearnMore = () => {
    return (
        <section className='learn-more' id='learn-more'>
            <div className='transition-lm'></div>
            <h1 className='lm-title'>LEARN MORE</h1>
            <div className='lm-container icons'>
                <button className='lm-btn '>
                    <a href='https://drive.google.com/file/d/1fakyuk40qIJyoOtIbXMp7piUOrBqbUNY/view?usp=sharing' target='_blank'> 
                        WHITEPAPER
                    </a>
                </button>
                <button className='lm-btn '>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSdkG1M4GB_MMcHPPIyU2sLlmupI15zLWTEN9IXflhlxqyCLUA/viewform?vc=0&c=0&w=1&flr=0' target='_blank'>
                         JOIN THE TEAM 
                    </a>
                </button>
            </div>
        </section>
    )
};

export default LearnMore;