"use client"
import { useState } from "react";
import { CustomImage } from "../UI/Image/CustomImage";
import classes from '../../styles/_singlePicture.module.sass'
export const SinglePicture:React.FC<{before:string, after:string, name:string, description:string}> = (props):JSX.Element => {
    const [isBefore,  setIsBefore] = useState<boolean>(true);
    return (
        <div className={classes.transformation}>
            <div className={classes.transformation__image}>
                <div className={classes.transformation__image__transform}>Odkryj przemianę !</div>
               {isBefore && <div onClick={()=> setIsBefore(false)} className={classes.transformation__image__before} ><CustomImage src={props.before} alt={"Zdjęcie przed"} quality={40} priority={false}/></div>}
                {!isBefore && <div onClick={()=> setIsBefore(true)} className={classes.transformation__image__after} ><CustomImage src={props.after} alt={"Zdjęcie przed"} quality={40} priority={false}/></div>}
            </div>
            <div className={classes.transformation__text}>
                <p className={classes.transformation__text__name}>{props.name}</p>
                <p className={classes.transformation__text__description}>{props.description}</p>
            </div>
        </div>           
    );
}