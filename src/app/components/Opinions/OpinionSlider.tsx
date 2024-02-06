"use client"
import {dataOpinions} from './DataOpinions';
import {useRef} from 'react'
import classes from "../../styles/_opinions.module.sass";
import { NextArrow } from "../UI/Buttons/NextArrow";
import { PrevArrow } from "../UI/Buttons/PrevArrow";
import Slider from "react-slick";
import { SingleOpinion } from "./SingleOpinion";
export const OpinionSlider = ():JSX.Element => {
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
        slidesToShow: 3,
        slidesToScroll: 2,
        nextArrow: <NextArrow onClick={next} />,
        prevArrow: <PrevArrow onClick={previous} />,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
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
            {dataOpinions.map(el => {
                return <SingleOpinion key={el.name+Math.random()} name={el.name} stars={el.stars} text={el.text} />
            }
             )}
        </Slider>
    )
}
