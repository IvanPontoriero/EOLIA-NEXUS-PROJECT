import { Link } from 'react-router-dom';

const Members = () => {


    return(
        <div className='members'>
            <ul className='icons members-icons'>
                <li className='icon'>
                    <Link to={{ pathname: "https://discord.gg/kpFYAB2Q" }} target="_blank">
                        PV
                    </Link>
                </li>
                <li className='icon'>
                    <Link to={{ pathname: "https://twitter.com/EoliaNexus?t=43I5_glpP2V-W1Z1RYYIXw&s=08" }} target="_blank">
                        LR
                    </Link>
                </li>
                <li className='icon'>
                    <Link to={{ pathname: "https://twitter.com/EoliaNexus?t=43I5_glpP2V-W1Z1RYYIXw&s=08" }} target="_blank">
                        JP
                    </Link>
                </li>
                <li className='icon'>
                    <Link to={{ pathname: "https://twitter.com/EoliaNexus?t=43I5_glpP2V-W1Z1RYYIXw&s=08" }} target="_blank">
                        AN
                    </Link>
                </li>
                <li className='icon'>
                    <Link to={{ pathname: "https://twitter.com/EoliaNexus?t=43I5_glpP2V-W1Z1RYYIXw&s=08" }} target="_blank">
                        HO
                    </Link>
                </li>
            </ul>
        </div>
    )
};

export default Members;