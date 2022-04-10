import OrangeCar from '../../Assets/orange-car.png'
import PurpleCar from '../../Assets/purple-car.png'

const Roadmap = () => {

    return (
        <div className='roadmap'>
                <div className='rm-text'>
                    <div className='text-section'>
                        <h2>Phase One :: Building the Dream</h2>
                        <hr/>
                        <h3>"The Founding Stones"</h3>
                        <p>
                            The *Founding Stones* a collection of 1000 equivalent NFTs will be minted to collect initial money 
                            to start the project. These tokens will allow owners to receive rewards in SOL as th project achieves its future goals.
                        </p>
                        <hr/>
                        <h3>"The First Collection"</h3>
                        <p>
                            A collection of 119 tokens, each representing one element of the periodic table, will be realesed. 
                            These tokens will be related to one another by a collecting system, that will incentivize users to trade
                            and collect them in pursuit of different przes, awarded in the form of NFTs that will entitle the owners 
                            to receive multiple perks and rewards in the future.
                        </p>
                        <hr/>
                        <h3>"The Virtual Museum Demo"</h3>
                        <p>
                            The holders of the original 119 elements will receive an unique and exclusive skin designed and modeled by hand, 
                            that will allow them to participate on an exclusive event demonstrating the core functionalities of the first virtual 
                            attraction hosted in Eolia: A virtual museum dedicated to digital art made live, in world and exclusively for the museum.
                        </p>
                        <hr/>
                        <h3>"Second Founding Stones Batch"</h3>
                        <p>
                            2000 new Founding Stones "Grade B" will be minted to continue funding development, these tokens will receive equal share 
                            in future projects as the original "Grade A" tokens, but the rewards will be distributed among twice as many tokens, 
                            so each token individually will receive less than one from the previous series.
                        </p>
                        <hr/>
                        <h3>"The Second Collection"</h3>
                        <p>
                            400 tokens, each representing one historical personality will be created, this collection will share similar 
                            collectionability dynamics as the first one.
                        </p>
                        <hr/>
                        <h3>"Pre Opening Event"</h3>
                        <p>
                            A similar event to that of the first demo will be hosted in the Eolia Virtual Museum, this event will expand the art collection, 
                            showkase new functionalities, and it will demonstrate the effective scalability of the project's architecture
                        </p>
                        <hr/>
                        <h3>"Eolia Nexus Virtual Museum Great Opening"</h3>
                        <p>
                            A larger event will be hosted in the Virtual Museum, this event will finally allow for the general public to access the museum, 
                            with limited access to some functionalities. After the event, the museum will remain open to visitors, and new events will be hosted 
                            on a regular schedule to continue expanding the museum.
                        </p>
                    </div>
                    <div className='text-section'>                 
                        <h2>Phase Two :: Expansion and Continuation</h2>
                        <hr/>
                        <h3>"Overview"</h3>
                        <p>
                            As the museum continues to expand, new features will be developed to allow for User Made Experiences, and expansion of the virtual 
                            environment towards a more community driven experience.
                            New forms of artistic media, architecture, fashion and user customized experiences are just some of the possibilities pondered 
                            by the team to this date. 
                        </p>                        
                    </div>
                    <div className='text-section'>                 
                        <h2>Phase Three :: Going Further</h2>
                        <hr/>
                        <h3>"Overview"</h3>
                        <p>
                            Once the Eolia Virtual Environment is properly established, we hope to invest and help develop new projects outside the virtual space, 
                            allowing the community to have a tangible impact in the real world, and ensuring new sustainable sources of income to continue 
                            rewarding token ownership.    
                        </p>                        
                    </div>
                </div>
                <div className='orangecar-container'>
                    <img src={ OrangeCar } alt='orange car illustration' className='orangecar' />    
                </div>
                <div className='purplecar-container'>
                    <img src={ PurpleCar } alt='purple car illustration' className='purplecar' />    
                </div>
            </div>
    )
}

export default Roadmap;