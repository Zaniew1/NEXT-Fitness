import styles from "../../styles/_button.module.sass"
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import {  IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type ButtonCallendarType = {text: string, fontAwesome: IconDefinition | null, path: string};
export const Button:React.FC<ButtonCallendarType> = (props ): JSX.Element => {

  return (
    <Link className={styles.nav__callendar} href={props.path}>
            <div className={styles.button__callendar__icon__wrapper} >
              <FontAwesomeIcon className={styles.callendar__icon}  icon={faCalendarDays} />
            </div>
      {props.text}
    </Link>
  );
};
 