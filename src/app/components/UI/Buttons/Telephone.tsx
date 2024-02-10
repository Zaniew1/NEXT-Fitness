import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import classes from '../../../styles/_telephone.module.sass'
import Link from 'next/link'
export const Telephone = ():JSX.Element => {
    return (
    <Link href={"tel:+48503954333"} className={classes.telephone}>
        <FontAwesomeIcon icon={faPhone} />
    </Link>)
}