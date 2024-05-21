import React from 'react'
import { nextSlide, prevSlide, dotSlide } from '../../features/slices/sliderSlice'
import { useSelector, useDispatch } from 'react-redux'

const Slider = () => {

    const slideIndex = useSelector((state) => state.slider.value);
    console.log("slide index", slideIndex)
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(nextSlide(slideIndex + 1))}>Next</button>
            <button>Prev</button>

        </div>
    )
}

export default Slider