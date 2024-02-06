import classes from '../../../styles/_trainings.module.sass';
import { SingleTraining } from './../Utils/SingleTraining';
import {dataGoal} from './../TrainingsDataGoal';
export const SingleTrainingGoal :React.FC<{visibility:boolean}> = (props):JSX.Element => {
    return(
        <>
         {props.visibility && 
                <div className={classes.trainings__wrapper}>
                    {dataGoal.map(singleGoal=>{
                        return <SingleTraining key={Math.random()+singleGoal.img} img={singleGoal.img} alt={singleGoal.header} header={singleGoal.header} paragraph={singleGoal.paragraph} path={singleGoal.path} />

                    })}
                </div>
        }
        </>
    )
}