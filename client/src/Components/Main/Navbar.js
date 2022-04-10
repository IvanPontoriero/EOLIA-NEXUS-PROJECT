import { useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../../Assets/logo.png';
import {FaHamburger} from 'react-icons/fa';
import {FaWindowClose} from "react-icons/fa";
// Se puede usar IconContext para dar estilo global a todos los iconos
import 'animate.css';

        
const Navbar = () => {
    
    const [ isMobile, setIsMobile ] = useState(false);

    return (
        <div className='header'>
            <button className='mobile-nav-toggle' onClick={() => setIsMobile(!isMobile)}
            aria-controls='primary-navigation' aria-expanded='false'>
                { isMobile ? <FaWindowClose /> : <FaHamburger /> }
                <span className='sr-only'></span>
            </button>
            <nav className='navbar'>
                <img src={ Logo } alt='eolia nexus logo' className='logo rotating'/>
                <ul id='primary-navigation' data-visible='false' className={isMobile ? 'primary-navigation flex mobile' : 'primary-navigation flex'} onClick={() => setIsMobile(true)}>
                    <li>
                        <Link activeClass="active" to="about-us" spy={true} 
                        smooth={true} offset={0} duration={500}>
                            ABOUT US
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="utility" spy={true} 
                        smooth={true} offset={0} duration={500} >
                            UTILITY
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="roadmap" spy={true} 
                        smooth={true} offset={0} duration={500}>
                            ROADMAP
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="faq" spy={true} 
                        smooth={true} offset={0} duration={500}>
                            F.A.Q.
                        </Link>
                    </li>
                    <li>
                        <a 
                        activeClass="active" 
                        href="https://drive.google.com/file/d/1fakyuk40qIJyoOtIbXMp7piUOrBqbUNY/view?usp=sharing" spy={true} 
                        smooth={true} 
                        target='_blank'>
                            WHITEPAPER
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;