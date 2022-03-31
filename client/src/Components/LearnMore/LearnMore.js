import { Link } from 'react-router-dom'
import './learnmore.css';

const LearnMore = () => {
    return (
        <section className='learn-more' id='learn-more'>
            <div className='transition'></div>
            <h1 className='lm-title'>LEARN MORE</h1>
            <div className='lm-container icons'>
                <button className='lm-btn '>
                    <Link to='/learn-more'> WHITEPAPER</Link>
                </button>
                <button className='lm-btn '>
                    <Link to='/join-the-team'> JOIN THE TEAM </Link>
                </button>
            </div>
        </section>
    )
};

export default LearnMore;