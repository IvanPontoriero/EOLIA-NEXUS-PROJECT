import { Link } from 'react-router-dom';
import { FaDiscord } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className='social-media'>
            <ul className='icons column'>
                <li className='icon'>
                    <Link to={{ pathname: "https://discord.gg/kpFYAB2Q" }} target="_blank">
                        <FaDiscord />
                    </Link>
                </li>
                <li className='icon'>
                    <Link to={{ pathname: "https://twitter.com/EoliaNexus?t=43I5_glpP2V-W1Z1RYYIXw&s=08" }} target="_blank">
                        <FaTwitter />
                    </Link>
                </li>
                <li className='icon'>
                    <Link to={{ pathname: "https://twitter.com/EoliaNexus?t=43I5_glpP2V-W1Z1RYYIXw&s=08" }} target="_blank">
                        <FaInstagram />
                    </Link>
                </li>
            </ul>
        </div>
    )
};

export default SocialMedia;