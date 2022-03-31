import Graffiti from '../../Assets/android.png'

const WeAre = () => {
    return (
        <div className='about-us2'>
            <section className='au-section right'>
                <div className='text-bg2'>
                    <div className='text2-container'>
                        <p class='au-text2'>
                            .Eolia is the vestige of what our civilization once was. 
                            A small paradise saved by the vision of former businessmen who knew 
                            how to listen to the astronomers warnings and acted on time. A cultural 
                            Eden, which was developed to be the living record of what we once were, 
                            a paradise where art, sports and entertainment are common.
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