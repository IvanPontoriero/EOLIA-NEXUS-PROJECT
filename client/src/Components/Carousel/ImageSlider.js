import { useState } from 'react'
import Autos from '../../Assets/autos.jpg'
import Pintor from '../../Assets/pintor.jpg'
import Street3 from '../../Assets/street3.png'
import { FaArrowAltCircleRight } from 'react-icons/fa'

const ImageSlider = () => {
    const {current, setCurrent} = useState(0)

    return (
        <section className='carousel'>
            <h1 style={{color: 'white'}}>Hello mom!</h1>
            <img src={Autos} alt='travel image' />
            <img src={Pintor} alt='travel image' />
            <img src={Street3} alt='travel image' />
        </section>
    )
}

export default ImageSlider