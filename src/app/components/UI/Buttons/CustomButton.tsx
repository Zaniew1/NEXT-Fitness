import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMessage } from '@fortawesome/free-solid-svg-icons'
import styles from '../../../styles/_customButton.module.sass'

export type CustomButtonType = {customClass?: string, text: string, icon?: "tel" | "mes", path: string, color: "white" | "black"};
export const CustomButton:React.FC<CustomButtonType> = (props): JSX.Element => {
  return (
    <Link className={`${styles.button} ${props.customClass ? props.customClass : ""}`} href={props.path} style={{color:`${props.color}`, borderColor:`${props.color}`}}>
         {props.icon && <div className={styles.button__wrapper} style={{color:`${props.color}`}} >
               <FontAwesomeIcon className={styles.button__wrapper__icon}  icon={props.icon == "tel" ? faPhone : faMessage} style={{color:`${props.color}`}} /> 
            </div>}
      {props.text}
    </Link>
  );
};
 