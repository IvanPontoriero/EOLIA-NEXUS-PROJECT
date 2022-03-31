import { RiArrowUpSFill } from  'react-icons/ri';
import './scrolltotop.css'
const Scroll = require('react-scroll');
const scroll = Scroll.animateScroll;

const ScrollToTop = () => {

    const toTop = () => {
        scroll.scrollToTop()
    }

    return(
        <div className='scroll-to-top'>
            <p className='stt-text' onClick={() => toTop()}>TOP</p>
            <RiArrowUpSFill className='arrow-up'/> 
        </div>
    )
}

export default ScrollToTop;