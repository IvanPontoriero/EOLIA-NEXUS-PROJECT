import { Link } from 'react-router-dom'
import './learnmore.css';

const LearnMore = () => {
    return (
        <section className='learn-more'>
            <h1 className='lm-title'>LEARN MORE</h1>
            <div className='lm-container icons'>
                <button className='lm-btn icon'>
                    <Link to='/whitepaper'> WHITEPAPER</Link>
                </button>
                <button className='lm-btn icon'>
                    <Link to='/join-the-team'> JOIN THE TEAM </Link>
                </button>
            </div>
        </section>
    )
};

export default LearnMore;