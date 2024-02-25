"use client"
import {dataGallery} from './DataGallery';
import {useRef} from 'react'
import classes from "../../styles/_gallery.module.sass";
import { NextArrow } from "../UI/Buttons/NextArrow";
import { PrevArrow } from "../UI/Buttons/PrevArrow";
import Slider from "react-slick";
import { SinglePicture } from "./SinglePicture";
export const GallerySlider = ():JSX.Element => {
let sliderRef = useRef<Slider | null>(null);
const next = () => {
    if (sliderRef.current) {
        (sliderRef.current as Slider).slickNext();
    }
};
const previous = () => {
    if (sliderRef.current) {
        (sliderRef.current as Slider).slickPrev();
    }
};
const settings={
    infinite: true,
    speed: 500,
    slidesToShow:4,
    slidesToScroll: 4,
    nextArrow: <NextArrow onClick={next} />,
    prevArrow: <PrevArrow onClick={previous} />,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
        }
        },
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        },

    ]
}

return(
    <Slider 
        ref={sliderRef} 
        className={classes.opinions__slider__overlapper__slick}  {...settings}
    >
        {dataGallery.map(el => {
            return <SinglePicture name={el.name} description={el.description} before={el.before} key={el.before+Math.random()}  after={el.after} />
        }
         )}
    </Slider>
)
    }