import classes from "../../../styles/_arrow.module.sass";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
export const PrevArrow:React.FC<{onClick:()=>void}> = (props):JSX.Element => {
    return (
        <div onClick={props.onClick} className={`${classes.arrow} ${classes.arrow__left}`}>
            <FontAwesomeIcon icon={faCaretLeft} />
        </div>
    )
}