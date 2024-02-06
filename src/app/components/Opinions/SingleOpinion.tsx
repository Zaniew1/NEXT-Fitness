
import classes from "../../styles/_singleOpinion.module.sass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
export const SingleOpinion:React.FC<{name:string, stars:number, text:string}> = (props):JSX.Element => {

    return(
        <div className={classes.single__opinion}>
            <h3 className={classes.single__opinion__header}>{props.name}</h3>
            <div className={classes.single__opinion__wrapper}>
                {[...Array(props.stars)].map(el =>{
                     return <div key={"single__opinion__wrapper__stars"+Math.random()} className={classes.single__opinion__wrapper__stars}><FontAwesomeIcon icon={faStar} /></div>
                    }
                )}
            </div>
            <p className={classes.single__opinion__paragraph}>{props.text}</p>
        </div>
    )
}