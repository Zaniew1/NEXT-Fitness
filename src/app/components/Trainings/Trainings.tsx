"use client"
import classes from '../../styles/_trainings.module.sass';
// import { CustomButton } from '../UI/Buttons/CustomButton';
// import { CustomImage } from '../UI/Image/CustomImage';
import {useState} from 'react';
import { SingleTraining } from './SingleTraining';
import {dataGoal} from './TrainingsDataGoal';
import {dataSuited} from './TrainingsDataSuited';
export const Trainings:React.FC =():JSX.Element => {
    const [firstTrainings, setFirstTraingins] = useState<boolean>(true);
    return(
        <section className={classes.trainings}>
            <div className={classes.trainings__buttons}>

                <button className={classes.trainings__button}>Dopasowany do Ciebie</button>
                <button className={classes.trainings__button}>Nastawiony na twój cel</button>
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