import Graffiti from '../../Assets/android.png'

const WeAre = () => {
    return (
        <div className='about-us2'>
            <h1 className='au-title2'>"LORE"</h1>
            <section className='au-section right'>
                <div className='text-bg2'>
                    <div className='text2-container'>
                        <p class='au-text2'>
                            Eolia is the vestige of a lost civilization. A small paradise 
                            saved by the vision of former businessmen who knew how to listen 
                            to the astronomers warnings and acted on time. A cultural Eden, 
                            which was developed to be the living record of what we once were, 
                            a sky where art and culture thrive in every corner.
                        </p>
                    </div>
                </div>  
                <div className='graffiti-container'>
                    <img src={ Graffiti } alt='graffiti artist ilustration' className='graffiti' />    
                </div> 
            </section>
            <div className='transition-bottom'></div>
        </div>
    )
}

export default WeAre;