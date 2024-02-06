import classes from '../../../styles/_trainings.module.sass';
import {CustomHeader} from '../../UI/Texts/CustomHeader';
import {CustomParagraph} from '../../UI/Texts/CustomParagraph';


export const TrainingsAbout :React.FC = ():JSX.Element => {
    return(
        <div className={classes.trainings__about}>
                <CustomHeader text={"O treningu personalnym"}/>
                <CustomParagraph text={"Rozpoczęcie cyklu treningów indywidualnych poprzedzone jest konsultacją, na której przeprowadzany jest wywiad z Klientem. Trener osobisty rozpoznaje Twoje potrzeby i możliwości oraz ustala krótko- i długoterminowe cele wraz z terminem ich realizacji. Poznaje doświadczenie treningowe, a także przeciwwskazania zdrowotne"}/>
                <CustomParagraph text={"Sesja treningowa trwa zazwyczaj około 60 minut – w zależności od celu treningowego danej osoby, stopnia jej wytrenowania oraz możliwości czasowych. Składa się z rozgrzewki, części głównej i krótkiej części stretchingowej przeprowadzanej na koniec."}/>
            </div>
    )
}