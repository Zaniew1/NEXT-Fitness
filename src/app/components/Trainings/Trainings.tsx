"use client"
import classes from '../../styles/_trainings.module.sass';
// import { CustomButton } from '../UI/Buttons/CustomButton';
// import { CustomImage } from '../UI/Image/CustomImage';
import {useState} from 'react';
import { SingleTraining } from './SingleTraining';
import {dataGoal} from './TrainingsDataGoal';
import {dataSuited} from './TrainingsDataSuited';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { CustomImage } from '../UI/Image/CustomImage';
import {CustomHeader} from '../UI/Texts/CustomHeader';
import {CustomParagraph} from '../UI/Texts/CustomParagraph';
import { CustomButton } from '../UI/Buttons/CustomButton';
export const Trainings:React.FC =():JSX.Element => {
    const [firstTrainings, setFirstTraingins] = useState<boolean>(true);
    const changeTrainings = () => {
        setFirstTraingins(!firstTrainings);
    }
    return(
        <section className={classes.trainings}>
            <div className={classes.trainings__training}>
                <div className={classes.trainings__training__wrapper}>
                    <CustomHeader customClass={classes.trainings__training__wrapper__header} text={"Trening personalny"}/>
                    <CustomParagraph text={"Rozpoczęcie cyklu treningów indywidualnych poprzedzone jest konsultacją, na której przeprowadzany jest wywiad z Klientem"} />
                    <div className={classes.trainings__training__wrapper__awesome}>
                    <FontAwesomeIcon icon={faClock} />
                        <span className={classes.trainings__training__wrapper__awesome__span}>60 minut</span>
                    </div>
                </div>
                <div className={classes.trainings__training__img}>
                    <CustomImage src={'/treningperso.jpg'} alt={''} sizes={''} priority={false} quality={50} />
                </div>
            </div>
            <div className={classes.trainings__about}>
                <CustomHeader text={"O treningu personalnym"}/>
                <CustomParagraph text={"Rozpoczęcie cyklu treningów indywidualnych poprzedzone jest konsultacją, na której przeprowadzany jest wywiad z Klientem. Trener osobisty rozpoznaje Twoje potrzeby i możliwości oraz ustala krótko- i długoterminowe cele wraz z terminem ich realizacji. Poznaje doświadczenie treningowe, a także przeciwwskazania zdrowotne"}/>
                <CustomParagraph text={"Sesja treningowa trwa zazwyczaj około 60 minut – w zależności od celu treningowego danej osoby, stopnia jej wytrenowania oraz możliwości czasowych. Składa się z rozgrzewki, części głównej i krótkiej części stretchingowej przeprowadzanej na koniec."}/>
            </div>
            <div className={classes.trainings__doings}>
                <div className={classes.trainings__doings__img}>
                    <CustomImage src={'/treningperso.jpg'} alt={''} sizes={''} priority={false} quality={50} />
                </div>
                <div className={classes.trainings__doings__wrapper}>
                <CustomParagraph text={"Trener personalny projektuje program każdej sesji, a następnie towarzyszy Ci w jego realizacji:"}/>
                    <ul className={classes.trainings__doings__wrapper__list}>
                        <li className={classes.trainings__doings__wrapper__list__item}>modeluje poprawne wykonanie ćwiczenia,</li>
                        <li className={classes.trainings__doings__wrapper__list__item}>asekuruje i dba zarówno o bezpieczeństwo, jak i wygodę Klienta podczas treningu,</li>
                        <li className={classes.trainings__doings__wrapper__list__item}>asystuje zmieniając obciążenia i ustawienia maszyn treningowych,</li>
                        <li className={classes.trainings__doings__wrapper__list__item}>poprawia technikę,</li>
                        <li className={classes.trainings__doings__wrapper__list__item}>uczy prawidłowego oddychania w czasie ćwiczeń,</li>
                        <li className={classes.trainings__doings__wrapper__list__item}>przypomina o uzupełnianiu płynów w odpowiednim momencie treningu,</li>
                    </ul>
                </div>
            </div>
            <div className={classes.trainings__buttons}>
                <button onClick={changeTrainings} className={classes.trainings__buttons__button}>Dopasowany do Ciebie</button>
                <button onClick={changeTrainings} className={classes.trainings__buttons__button}>Nastawiony na twój cel</button>
            </div>
            
            {firstTrainings && 
                <div className={classes.trainings__wrapper}>
                    {dataGoal.map(singleGoal=>{
                        return <SingleTraining key={Math.random()+singleGoal.img} img={singleGoal.img} alt={singleGoal.header} header={singleGoal.header} paragraph={singleGoal.paragraph} path={singleGoal.path} />

                    })}
                </div>
            }
            {!firstTrainings && 
                 <div className={classes.trainings__wrapper}>
                 {dataSuited.map(singleSuited=>{
                     return <SingleTraining key={Math.random()+singleSuited.img} img={singleSuited.img} alt={singleSuited.header} header={singleSuited.header} paragraph={singleSuited.paragraph} path={singleSuited.path} />
                 })}
             </div>
            }
            
        </section>
    )
}