import { Link } from 'react-router-dom';
import { FaDiscord } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className='social-media'>
            <ul className='icons column'>
                <li className='icon'>
                    <a href="https://discord.gg/TwGJasHq"target="_blank">
                        <FaDiscord />
                    </a>
                </li>
                <li className='icon'>
                    <a href="https://twitter.com/EoliaNexus?t=43I5_glpP2V-W1Z1RYYIXw&s=08"target="_blank">
                        <FaTwitter />
                    </a>
                </li>
                <li className='icon'>
                    <a href="https://instagram.com/eolianexus_pr?igshid=YmMyMTA2M2Y=" target="_blank">
                        <FaInstagram />
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default SocialMedia;