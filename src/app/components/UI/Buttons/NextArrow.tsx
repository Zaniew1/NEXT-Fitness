import classes from "../../../styles/_opinions.module.sass";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCaretRight} from "@fortawesome/free-solid-svg-icons";
export const NextArrow:React.FC<{onClick:()=>void}> = (props):JSX.Element => {
    return (
        <div onClick={props.onClick} className={`${classes.opinions__slider__overlapper__slick__arrow} ${classes.opinions__slider__overlapper__slick__arrow__right}`}>
            <FontAwesomeIcon icon={faCaretRight} />
        </div>
    )
}