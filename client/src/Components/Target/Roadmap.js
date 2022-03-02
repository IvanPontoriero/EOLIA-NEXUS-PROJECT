import { RiArrowUpSFill } from 'react-icons/ri';
import { RiArrowDownSFill } from 'react-icons/ri';

const Roadmap = () => {

    return (
        <div className='roadmap'>
                <RiArrowUpSFill className='rm-arrow'/>
                <p className='rm-text'> 
                    <h2>INITIAL FUNDING = </h2>
                    <ul>
                        <li>
                            NFTs of Foundation Stones will be sold to finance the project. 
                            Those buyers will receive benefits in SOL in the next stages of the project. 
                            The percentages are specified in the following section:
                        </li>
                    </ul>
                    <h2>FIRST MINT = </h2>
                    <ul>
                        <li>
                        Based on the periodic table of chemical elements.
                        It will consist of 119 pieces which will be divided and correlative collectibles.
                        Divisions will be made according to the type of element, creating subdivisions.
                        Those wallets that complete the sub-collections will receive a totally unique NFT as recognition. 
                        Those who get all the NFTs for completing the sub-collections will receive a final prize.
                        Through smart contracts, these NFTs will not only allow you to receive prizes in SOL, 
                        but will also give their owners the right to receive a unique skin inspired by their NFT.
                        </li>
                    </ul>
                </p>
                <RiArrowDownSFill className='rm-arrow'/>
            </div>
    )
}

export default Roadmap;