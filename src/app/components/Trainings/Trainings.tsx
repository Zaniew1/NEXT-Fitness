"use client"
import classes from '../../styles/_trainings.module.sass';
import {useState} from 'react';
import { TrainingsIntroduction } from './Utils/TrainingsIntroduction';
import { TrainingsAbout } from './Utils/TraingingsAbout';
import { TrainingsDoings } from './Utils/TrainingsDoings';
import { SingleTrainingGoal } from './Utils/SingleTrainingGoal';
import { SingleTrainingSuited } from './Utils/SingleTrainingSuited';
export const Trainings:React.FC =():JSX.Element => {
    const [firstTrainings, setFirstTraingins] = useState<boolean>(true);

    return(
        <section className={classes.train}>
            <div className={classes.trainings}>
                <TrainingsIntroduction/>
                <TrainingsAbout/>
                <TrainingsDoings/>
                <div className={classes.trainings__buttons}>
                    <button onClick={()=>setFirstTraingins(false)} className={`${classes.trainings__buttons__button} ${!firstTrainings ?? classes.trainings__buttons__button__active}`}>Dopasowany do Ciebie</button>
                    <button onClick={()=>setFirstTraingins(true)} className={`${classes.trainings__buttons__button} ${firstTrainings ?? classes.trainings__buttons__button__active}`}>Nastawiony na twój cel</button>
                </div>
                <SingleTrainingGoal visibility={firstTrainings}/>
                <SingleTrainingSuited visibility={firstTrainings}/>
            </div>
        </section>
    )
}