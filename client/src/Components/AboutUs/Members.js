import Logo from '../../Assets/logo.png';
import { Link } from 'react-router-dom';

const Members = () => {


    return(
        <div className='members'>
            <ul className='list-members members-icons'>
                <div className='icon-container'>
                    <p className='member-name'>LAUTARO</p>
                    <li className='member'>
                        <a href="https://discord.gg/kpFYAB2Q" target="_blank">
                            <img src={ Logo } alt='eolia nexus logo' className='member-icon'/>
                        </a>
                    </li>
                </div>
                <div class='icon-container'>
                    <p className='member-name'>PEDRO</p>
                    <li className='member'>
                        <Link to={{ pathname: "https://twitter.com/EoliaNexus?t=43I5_glpP2V-W1Z1RYYIXw&s=08" }} target="_blank">
                            <img src={ Logo } alt='eolia nexus logo' className='member-icon'/>
                        </Link>
                    </li>
                </div>
                <div className='icon-container'>
                    <p className='member-name'>IVAN</p>
                    <li className='member'>
                        <Link to={{ pathname: "https://twitter.com/EoliaNexus?t=43I5_glpP2V-W1Z1RYYIXw&s=08" }} target="_blank">
                            <img src={ Logo } alt='eolia nexus logo' className='member-icon'/>
                        </Link>
                    </li>
                </div>
                <div className='icon-container'>
                    <p className='member-name'>RONYN</p>
                    <li className='member'>
                        <Link to={{ pathname: "https://twitter.com/EoliaNexus?t=43I5_glpP2V-W1Z1RYYIXw&s=08" }} target="_blank">
                            <img src={ Logo } alt='eolia nexus logo' className='member-icon'/>
                        </Link>
                    </li>
                </div>
            </ul>
        </div>
    )
};

export default Members;