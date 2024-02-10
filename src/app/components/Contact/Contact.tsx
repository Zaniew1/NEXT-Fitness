import classes from '../../styles/_contact.module.sass'
import { ContactText } from './ContactText';
import { ContactSocials } from './ContactSocials';
import { ContactMap } from './ContactMap';
import { ContactForm } from './ContactForm';
// import { CustomImage } from '../UI/Image/CustomImage';
export const Contact: React.FC = (): JSX.Element =>{
    
    return (
        <div className={classes.contact__section}>
            <div className={classes.contact}>
            <h3 className={classes.contact__header}>Kontakt</h3>
            <ContactText/>
            <ContactSocials/>
            <ContactForm/>
            <ContactMap/>
        </div>
        </div>
    )
}