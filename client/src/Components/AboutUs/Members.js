import { GiAlienStare } from 'react-icons/gi'
import { GiDeathStar } from 'react-icons/gi'
import { GiSpaceSuit } from 'react-icons/gi'
import { GiSpaceship } from 'react-icons/gi'
import { GiAbstract015 } from 'react-icons/gi'
import { Link } from 'react-router-dom';

const Members = () => {


    return(
        <div className='members'>
            <ul className='list-members members-icons'>
                <div className='icon-container'>
                    <p className='member-name'>COSITORTO</p>
                    <li className='icon member'>
                        <Link to={{ pathname: "https://discord.gg/kpFYAB2Q" }} target="_blank">
                            <GiDeathStar />
                        </Link>
                    </li>
                </div>
                <div class='icon-container'>
                    <p className='member-name'>COSITORTO</p>
                    <li className='icon member'>
                        <Link to={{ pathname: "https://twitter.com/EoliaNexus?t=43I5_glpP2V-W1Z1RYYIXw&s=08" }} target="_blank">
                            <GiAlienStare />
                        </Link>
                    </li>
                </div>
                <div className='icon-container'>
                    <p className='member-name'>COSITORTO</p>
                    <li className='icon member'>
                        <Link to={{ pathname: "https://twitter.com/EoliaNexus?t=43I5_glpP2V-W1Z1RYYIXw&s=08" }} target="_blank">
                            <GiAbstract015 />
                        </Link>
                    </li>
                </div>
                <div className='icon-container'>
                    <p className='member-name'>COSITORTO</p>
                    <li className='icon member'>
                        <Link to={{ pathname: "https://twitter.com/EoliaNexus?t=43I5_glpP2V-W1Z1RYYIXw&s=08" }} target="_blank">
                            <GiSpaceship />
                        </Link>
                    </li>
                </div>
                <div className='icon-container'>
                    <p className='member-name'>COSITORTO</p>
                    <li className='icon member'>
                        <Link to={{ pathname: "https://twitter.com/EoliaNexus?t=43I5_glpP2V-W1Z1RYYIXw&s=08" }} target="_blank">
                            <GiSpaceSuit />
                        </Link>
                    </li>
                </div>
            </ul>
        </div>
    )
};

export default Members;