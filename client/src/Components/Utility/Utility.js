import Humanoid from '../../Assets/humanoid.png';
import './utility.css'

const Utility = () => {
    return(
        <div className='utility-container' id='utility'>
            <h1 className='lm-title'>Upcoming Token's Utility Overview</h1>
            <div className='utility'>
                <div className='utility-section'>                 
                    <h2>The Founding Stones Series A & B</h2>
                    <hr/>
                    <p>
                        These tokens will be sold to finance the development process, holders will receive 
                        rewards in SOL as the project moves on. These tokens don't provide access to the museum. 
                        Further details can be found on our whitepaper.
                    </p>                        
                </div>
                <div className='utility-section'>                 
                    <h2>The Elements Collection</h2>
                    <hr/>
                    <p>
                        119 tokens that represent each one chemical element from the periodic table, owners will be incentivized
                        to trade and collect them through a system of subcollections and prices, holders will also eventually get 
                        a unique exclusive skin made by hand that will grant access to exclusive features and events in the project,
                        and participation on a prize pool every quarter. These tokens don't grant acces to the museum or SOL rewards 
                        besides those from the prize pool. Learn more from the whitepaper.
                    </p>                        
                </div>
                <div className='utility-section'>                 
                    <h2>Skins</h2>
                    <hr/>
                    <p>
                        These tokens will be mostly airdropped to users that own tokens from preexisting collections, some others will be made 
                        by invited artist and sold on the spot, these tokens allow holders to access the museum directly through all events 
                        during the development process, and access to exclusive interaction possibilities after the opening, these also provide 
                        participation on a separate quarterly prize pool.
                    </p>                        
                </div>
            </div>
            <div className='humanoid-container'>
                <img src={Humanoid} alt='humanoid'/>
            </div>
        </div>        
    )
}

export default Utility;