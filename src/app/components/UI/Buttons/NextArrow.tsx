import classes from "../../../styles/_arrow.module.sass";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCaretRight} from "@fortawesome/free-solid-svg-icons";
export const NextArrow:React.FC<{onClick:()=>void}> = (props):JSX.Element => {
    return (
        <div onClick={props.onClick} className={`${classes.arrow} ${classes.arrow__right}`}>
            <FontAwesomeIcon icon={faCaretRight} />
        </div>
    )
}