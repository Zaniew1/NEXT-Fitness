import classes from '../../styles/_contact.module.sass'
export const ContactText: React.FC = (): JSX.Element =>{
    
    return (
        <div className={classes.contact__text } >
            <p className={classes.contact__text__paragraph }>W celu skontaktowania się ze mną podaję numer telefonu i adres e-mail.</p>
            <p className={classes.contact__text__paragraph }>W przypadku nie odbierania telefonu proszę o ponowny kontakt. Podczas treningów nie zawsze trener personalny ma możliwość prowadzenia rozmowy telefonicznej.</p>
            <p className={classes.contact__text__paragraph }>Na wiadomości mailowe / FB / Instagram / smsy odpowiadam na bieżąco.</p>
            <p className={classes.contact__text__paragraph }>Treningi personalne prowadzę 6 dni w tygodniu w godzinach 6-21.</p>
            <p className={classes.contact__text__paragraph }>Serdecznie zapraszam do współpracy. </p>
        </div>
    )
}